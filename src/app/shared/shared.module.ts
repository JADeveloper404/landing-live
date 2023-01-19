import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyButtonComponent } from './components/buy-button/buy-button.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalButtonsBuyComponent } from './components/modal-buttons-buy/modal-buttons-buy.component';

@NgModule({
  declarations: [
    BuyButtonComponent,
    MenuComponent,
    FooterComponent,
    ModalButtonsBuyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BuyButtonComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
