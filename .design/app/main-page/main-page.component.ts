import {ElementSelectionService} from './../element-selection.service';
import {ComponentInspectorService} from './../component-inspector.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {SlickCarouselComponent} from 'ngx-slick-carousel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  constructor(public __elementSelectionService:ElementSelectionService,private __componentInspectorService:ComponentInspectorService) { this.__componentInspectorService.getComp(this); }slides = [
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

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}