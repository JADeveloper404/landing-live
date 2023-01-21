import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-tratamiento',
  templateUrl: './modal-tratamiento.component.html',
  styleUrls: ['./modal-tratamiento.component.scss']
})
export class ModalTratamientoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalTratamientoComponent>,) { }

  ngOnInit(): void {
  }

}
