import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { QuarterSectionComponent } from './components/quarter-section/quarter-section.component';
import { FifthSectionComponent } from './components/fifth-section/fifth-section.component';
import { SixSectionComponent } from './components/six-section/six-section.component';
import { SevenSectionComponent } from './components/seven-section/seven-section.component';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    QuarterSectionComponent,
    FifthSectionComponent,
    SixSectionComponent,
    SevenSectionComponent,
    LandingComponent,
  ],
  imports: [CommonModule, SharedModule, LandingRoutingModule],
})
export class LandingModule {}
