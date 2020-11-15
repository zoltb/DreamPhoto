import {ElementSelectionService} from './../../../element-selection.service';
import {ComponentInspectorService} from './../../../component-inspector.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingatlan-kepek',
  templateUrl: './ingatlan-kepek.component.html',
  styleUrls: ['./ingatlan-kepek.component.css']
})
export class IngatlanKepekComponent implements OnInit {

  constructor(public __elementSelectionService:ElementSelectionService,private __componentInspectorService:ComponentInspectorService) { this.__componentInspectorService.getComp(this); }kepek;

  ngOnInit() : void{

    this.kepek = [
      {img: '../assets/images/ingatlanok/1.jpg'},
      {img: '../assets/images/ingatlanok/2.jpg'},
      {img: '../assets/images/ingatlanok/5.jpg'},
      {img: '../assets/images/ingatlanok/10.jpg'},
      {img: '../assets/images/ingatlanok/17.jpg'},
      {img: '../assets/images/ingatlanok/18.jpg'},
      {img: '../assets/images/ingatlanok/20.jpg'},
      {img: '../assets/images/ingatlanok/80.jpg'},
      {img: '../assets/images/ingatlanok/200.jpg'},
      {img: '../assets/images/ingatlanok/1111.jpg'},
      {img: '../assets/images/ingatlanok/2222.jpg'},
      {img: '../assets/images/ingatlanok/5555.jpg'},
      {img: '../assets/images/ingatlanok/12121.jpg'},
      {img: '../assets/images/ingatlanok/101010.jpg'},
      {img: '../assets/images/ingatlanok/a.jpg'},
      {img: '../assets/images/ingatlanok/aaa.jpg'},
      {img: '../assets/images/ingatlanok/b.jpg'},
      {img: '../assets/images/ingatlanok/c.jpg'},
      {img: '../assets/images/ingatlanok/ddd.jpg'},
      {img: '../assets/images/ingatlanok/fff.jpg'},
      {img: '../assets/images/ingatlanok/IMG_5835.jpg'},
      {img: '../assets/images/ingatlanok/images/IMG_6088.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6095.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6166.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6168.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6175.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6207.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6216.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6225.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6551.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6616.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6624.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6628.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6631.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6633.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6638.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6659.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6668.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6708.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6718.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6728.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6744.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6748.jpg'},
      {img: '../assets/images/ingatlanok/IMG_6750.jpg'},
      {img: '../assets/images/ingatlanok/IMG_7096.JPG'},
      {img: '../assets/images/ingatlanok/IMG_7104.JPG'},
      {img: '../assets/images/ingatlanok/IMG_7106.JPG'},
      {img: '../assets/images/ingatlanok/IMG_7114.JPG'},
      {img: '../assets/images/ingatlanok/IMG_7212.jpg'},
      {img: '../assets/images/ingatlanok/IMG_7238.jpg'},
      {img: '../assets/images/ingatlanok/IMG_7279.JPG'},
      {img: '../assets/images/ingatlanok/IMG_7289.JPG'},
      {img: '../assets/images/ingatlanok/IMG_7336.jpg'},
      {img: '../assets/images/ingatlanok/IMG_7340.jpg'},
      {img: '../assets/images/ingatlanok/IMG_7758.jpg'},
      {img: '../assets/images/ingatlanok/IMG_7759.jpg'},
      {img: '../assets/images/ingatlanok/IMG_8239.jpg'},
      {img: '../assets/images/ingatlanok/sss.jpg'},

    ];
  }

}
