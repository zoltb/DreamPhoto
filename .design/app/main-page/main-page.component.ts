import {ElementSelectionService} from './../element-selection.service';
import {ComponentInspectorService} from './../component-inspector.service';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(public __elementSelectionService:ElementSelectionService,private __componentInspectorService:ComponentInspectorService) { this.__componentInspectorService.getComp(this); }flag = false;
  onImageLoad(e) {
    this.flag = true
  }


  slides = [
	{ img: '../assets/tothegith/kezdolap/IMG_5015.jpg' },
    {img: '../assets/images/ingatlanok/5.jpg'},
    {img: '../assets/images/ingatlanok/20.jpg'},
    {img: '../assets/images/ingatlanok/80.jpg'},
    {img: '../assets/images/ingatlanok/b.jpg'},
    {img: '../assets/images/ingatlanok/c.jpg'},    
    {img: '../assets/images/ingatlanok/IMG_5835.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6088.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6168.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6175.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6207.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6216.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6616.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6624.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6631.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6633.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6638.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6728.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6744.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6748.jpg'},
    {img: '../assets/images/ingatlanok/IMG_6750.jpg'},
    {img: '../assets/images/ingatlanok/IMG_7096.JPG'},
  ];

  slideConfig = {
	arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    focusOnSelect: true
    

  };
  
	

}
