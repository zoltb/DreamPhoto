import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeirasComponent } from './leiras.component';

describe('LeirasComponent', () => {
  let component: LeirasComponent;
  let fixture: ComponentFixture<LeirasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeirasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
