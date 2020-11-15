import {ElementSelectionService} from './../../element-selection.service';
import {ComponentInspectorService} from './../../component-inspector.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-ceges',
  templateUrl: './gallery-ceges.component.html',
  styleUrls: ['./gallery-ceges.component.css']
})
export class GalleryCegesComponent implements OnInit {

  constructor(public __elementSelectionService:ElementSelectionService, private __componentInspectorService:ComponentInspectorService) {this.__componentInspectorService.getComp(this);
 }

  ngOnInit() {
  }

}
