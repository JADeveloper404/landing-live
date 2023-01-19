import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalSuscribeComponent } from 'src/app/shared/components/modal-suscribe/modal-suscribe.component';

@Component({
  selector: 'app-six-section',
  templateUrl: './six-section.component.html',
  styleUrls: ['./six-section.component.scss']
})
export class SixSectionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(ModalSuscribeComponent, {
      panelClass: "custom-modal",
      maxWidth: "95%"
    });
  }

}
