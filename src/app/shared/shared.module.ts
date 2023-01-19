import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyButtonComponent } from './components/buy-button/buy-button.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalButtonsBuyComponent } from './components/modal-buttons-buy/modal-buttons-buy.component';
import { ModalSuscribeComponent } from './components/modal-suscribe/modal-suscribe.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BuyButtonComponent,
    MenuComponent,
    FooterComponent,
    ModalButtonsBuyComponent,
    ModalSuscribeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BuyButtonComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
