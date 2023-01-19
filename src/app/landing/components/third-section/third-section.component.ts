import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalButtonsBuyComponent } from 'src/app/shared/components/modal-buttons-buy/modal-buttons-buy.component';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss']
})
export class ThirdSectionComponent implements OnInit {

  dataList = [
    {
      src: "assets/img/iconos/check.png",
      text: "Sabrás cuáles son los 7 propósitos para vivir una vida plena.",
    },
    {
      src: "assets/img/iconos/check.png",
      text: "Despertarás el deseo de disfrutar y aprovechar cada día que tienes por vivir.",
    },
    {
      src: "assets/img/iconos/check.png",
      text: "Comenzarás a encaminar tu vida hacia la plenitud y verdadera felicidad.",
    },
    {
      src: "assets/img/iconos/check.png",
      text: "Inspirarás a otras personas a vivir desde el propósito.",
    },
    {
      src: "assets/img/iconos/check.png",
      text: "Finalmente, aportarás a la construcción de un mundo mejor.",
    },
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(promo: boolean) {
    this.dialog.open(ModalButtonsBuyComponent, {
      panelClass: "custom-modal",
      maxWidth: "90%",
      data: {
        promo
      }
    })
  }

}
