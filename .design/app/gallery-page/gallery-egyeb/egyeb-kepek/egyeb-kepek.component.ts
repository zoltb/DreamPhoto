import {ElementSelectionService} from './../../../element-selection.service';
import {ComponentInspectorService} from './../../../component-inspector.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egyeb-kepek',
  templateUrl: './egyeb-kepek.component.html',
  styleUrls: ['./egyeb-kepek.component.css']
})
export class EgyebKepekComponent implements OnInit {

  constructor(public __elementSelectionService:ElementSelectionService, private __componentInspectorService:ComponentInspectorService) {this.__componentInspectorService.getComp(this);
 }

  ngOnInit() {
  }

}
