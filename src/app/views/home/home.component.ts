import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // aqui podemos linkar as imagens para aparecer no carousel, por enquanto deixei a mesma imagem
  // slides = [
  //   {image: 'assets/img/noimages.jpg', text: 'First'},
  //   {image: 'assets/img/noimages.jpg', text: 'Second'},
  //   {image: 'assets/img/noimages.jpg', text: 'Third'}
  // ];

  // noWrapSlides = false;
  // showIndicator = true;
  // cycleInterval = 3000;

}
