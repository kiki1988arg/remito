import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pkg-distribution-dialog',
  templateUrl: './pkg-distribution-dialog.component.html',
  styleUrls: ['./pkg-distribution-dialog.component.scss']
})
export class PkgDistributionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PkgDistributionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
