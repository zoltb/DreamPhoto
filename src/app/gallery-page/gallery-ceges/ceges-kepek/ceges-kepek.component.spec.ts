import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CegesKepekComponent } from './ceges-kepek.component';

describe('CegesKepekComponent', () => {
  let component: CegesKepekComponent;
  let fixture: ComponentFixture<CegesKepekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CegesKepekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CegesKepekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
