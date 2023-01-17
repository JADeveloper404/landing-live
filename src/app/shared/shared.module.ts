import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyButtonComponent } from './components/buy-button/buy-button.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    BuyButtonComponent,
    MenuComponent,
    FooterComponent
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
