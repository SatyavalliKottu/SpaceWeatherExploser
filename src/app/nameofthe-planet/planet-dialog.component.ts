import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-planet-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './planet-dialog.component.html',
  styleUrls: ['./planet-dialog.component.scss'],
})
export class PlanetDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PlanetDialogComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
