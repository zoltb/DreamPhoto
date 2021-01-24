import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KepekSzobaComponent } from './kepek-szoba.component';

describe('KepekSzobaComponent', () => {
  let component: KepekSzobaComponent;
  let fixture: ComponentFixture<KepekSzobaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KepekSzobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KepekSzobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
