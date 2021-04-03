import {ElementSelectionService} from './../../element-selection.service';
import {ComponentInspectorService} from './../../component-inspector.service';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery-ingatlanok.component.html',
  styleUrls: ['./gallery-ingatlanok.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryIngatlanokComponent { constructor(public __elementSelectionService:ElementSelectionService,private __componentInspectorService:ComponentInspectorService) { this.__componentInspectorService.getComp(this); }}








