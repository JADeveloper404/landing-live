import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnInit {

  @Input() titleButton = "Comprar libro";
  @Input() hrefButton = "https://checkout.wompi.co/l/BrogYN";
  @Input() targetButton = "";

  constructor() { }

  ngOnInit(): void {
  }

}
