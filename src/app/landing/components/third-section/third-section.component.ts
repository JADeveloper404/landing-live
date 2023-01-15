import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss']
})
export class ThirdSectionComponent implements OnInit {

  dataList = [
    {
      src: "../../../../assets/img/iconos/check.png",
      text: "Sabrás cuáles son los 7 propositos para vivir una vida plena.",
    },
    {
      src: "../../../../assets/img/iconos/check.png",
      text: "Despertarás el deseo de disfrutar y aprovechar cada día que tienes por vivir.",
    },
    {
      src: "../../../../assets/img/iconos/check.png",
      text: "Comenzarás a encaminar tu vida hacia la plenitud y verdadera felicidad.",
    },
    {
      src: "../../../../assets/img/iconos/check.png",
      text: "Inspirarás a otras personas a vivir desde el propósito.",
    },
    {
      src: "../../../../assets/img/iconos/check.png",
      text: "Finalmente, aportarás a la construcción de un mundo mejor.",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
