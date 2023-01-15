import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyButtonComponent } from './components/buy-button/buy-button.component';



@NgModule({
  declarations: [
    BuyButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BuyButtonComponent
  ]
})
export class SharedModule { }
