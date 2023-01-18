import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-six-section',
  templateUrl: './six-section.component.html',
  styleUrls: ['./six-section.component.scss']
})
export class SixSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    window.open("https://checkout.wompi.co/l/BrogYN", "_blank");
  }

}
