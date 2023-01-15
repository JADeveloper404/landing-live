import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnInit {

  @Input() titleButton = "Comprar curso";

  constructor() { }

  ngOnInit(): void {
  }

}
