import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnInit {

  @Input() titleButton = "Comprar libro";

  @Output() clickButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emit() {
    this.clickButton.emit();
  }

}
