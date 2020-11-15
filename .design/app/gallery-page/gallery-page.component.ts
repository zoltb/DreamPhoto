import {ElementSelectionService} from './../element-selection.service';
import {ComponentInspectorService} from './../component-inspector.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  constructor(public __elementSelectionService:ElementSelectionService, private __componentInspectorService:ComponentInspectorService) {this.__componentInspectorService.getComp(this);

  }

  ngOnInit(): void {

  }

}
