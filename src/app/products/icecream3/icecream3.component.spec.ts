import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Icecream3Component } from './icecream3.component';

describe('Icecream3Component', () => {
  let component: Icecream3Component;
  let fixture: ComponentFixture<Icecream3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Icecream3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Icecream3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
