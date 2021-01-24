import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleryIngatlanokComponent } from './gallery-ingatlanok.component';

describe('GalleryIngatlanokComponent', () => {
  let component: GalleryIngatlanokComponent;
  let fixture: ComponentFixture<GalleryIngatlanokComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryIngatlanokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryIngatlanokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
