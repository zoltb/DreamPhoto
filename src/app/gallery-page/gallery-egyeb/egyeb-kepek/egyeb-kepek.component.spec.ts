import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyebKepekComponent } from './egyeb-kepek.component';

describe('EgyebKepekComponent', () => {
  let component: EgyebKepekComponent;
  let fixture: ComponentFixture<EgyebKepekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgyebKepekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyebKepekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
