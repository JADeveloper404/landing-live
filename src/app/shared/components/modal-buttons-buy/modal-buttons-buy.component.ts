import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-buttons-buy',
  templateUrl: './modal-buttons-buy.component.html',
  styleUrls: ['./modal-buttons-buy.component.scss'],
})
export class ModalButtonsBuyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalButtonsBuyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { promo: boolean; }
  ) {}

  ngOnInit(): void {}

  redirect(url: string) {
    window.open(url, "_blank");
  }
}
