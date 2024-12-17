import {
  Component,
  Input,
  Injector,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-render',
  template: `<ng-container #dynamicContainer></ng-container> `,
  standalone: true,
  imports: [CommonModule],
})
export class DynamicRenderComponent implements OnChanges {
  @Input() component: any; // Component type to load dynamically
  @Input() inputs: { [key: string]: any } = {}; // Inputs for the dynamically loaded component
  @Input() showBackButton: boolean = true;

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private injector: Injector, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['component'] && this.component) {
      this.loadComponent();
    }
  }

  private loadComponent() {
    this.container.clear(); // Clear any previously loaded component

    const componentRef = this.container.createComponent(this.component, {
      injector: this.injector,
    });

    // Pass inputs to the dynamically created component
    if (this.inputs) {
      Object.entries(this.inputs).forEach(([key, value]) => {
        (componentRef.instance as any)[key] = value;
      });
    }
  }
  // goBack() {
  //   this.router.navigate(['/home']); // Navigate back to the home component
  // }
}
