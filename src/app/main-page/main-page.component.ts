import {Component, OnInit, ViewChild} from '@angular/core';
import {SlickCarouselComponent} from 'ngx-slick-carousel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  slides = [
    {img: '../assets/tothegith/IMG_4832.jpg'},
    {img: '../assets/tothegith/IMG_4980.jpg'},
    {img: '../assets/tothegith/IMG_5715.jpg'},
    {img: '../assets/tothegith/IMG_5015.jpg'},
    {img: '../assets/tothegith/IMG_5666.jpg'},
    {img: '../assets/tothegith/IMG_6088.jpg'},
    {img: '../assets/tothegith/IMG_6481.jpg'},
    {img: '../assets/tothegith/IMG_6628.jpg'},
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
//working but need to be on the image
//     nextArrow: '<div style="position: absolute" (click)="prev()">' +
//     '<i class="fas fa-caret-left fa-3x" style="color: white"></i></div>',
    // prevArrow: '<div class="nav-btn prev-slide"></div>',
    dots: true,
    //
    // nextArrow:"<div class='nav-btn next-slide'></div>",
    // prevArrow:"<div class='nav-btn prev-slide'></div>",
    infinite: true,
    autoplay: true,
    focusOnSelect: true,

  };

//<div style="position: absolute; top: 10px;">Text</div>
//   next() {
//     this.slickModal.slickNext();
//   }
//
//   prev() {
//     this.slickModal.slickPrev();
//   }
  slickPlay(){
    console.log("hhiiiiii")
  }
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
  // @Output() toogle = new EventEmitter();
  // @HostListener('window:scroll', [])
  // // onWindowScroll() {
  // //   const a = window.pageYOffset;
  // //   if (a = 99) {
  // //     console.log(a);
  // //   }
  // //   console.log('Scrolling!');
  // // }
  // // check scroll position
  // onActivate(e) {
  //   const a = window.pageYOffset;
  //   if (a > 111) {
  //     this.toogle.emit();
  //     console.log(a);
  //   }

  // }
}
