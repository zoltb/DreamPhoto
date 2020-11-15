import {Component, OnInit, ViewChild, OnChanges} from '@angular/core';
import {SlickCarouselComponent} from 'ngx-slick-carousel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  slides = [
    {img: '../assets/tothegith/kezdolap/IMG_4832.jpg'},
    {img: '../assets/tothegith/kezdolap/IMG_4980.jpg'},
    {img: '../assets/tothegith/kezdolap/IMG_5715.jpg'},
    {img: '../assets/tothegith/kezdolap/IMG_5015.jpg'},
    {img: '../assets/tothegith/kezdolap/IMG_5666.jpg'},
    {img: '../assets/tothegith/kezdolap/IMG_6088.jpg'},
    {img: '../assets/tothegith/kezdolap/IMG_6481.jpg'},
    {img: '../assets/tothegith/kezdolap/IMG_6628.jpg'},
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    focusOnSelect: true,

  };
  
}
