import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleryCegesComponent } from './gallery-ceges.component';

describe('GalleryCegesComponent', () => {
  let component: GalleryCegesComponent;
  let fixture: ComponentFixture<GalleryCegesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
