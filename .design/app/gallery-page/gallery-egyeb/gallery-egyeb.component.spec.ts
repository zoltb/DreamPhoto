import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryEgyebComponent } from './gallery-egyeb.component';

describe('GalleryEgyebComponent', () => {
  let component: GalleryEgyebComponent;
  let fixture: ComponentFixture<GalleryEgyebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryEgyebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryEgyebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
