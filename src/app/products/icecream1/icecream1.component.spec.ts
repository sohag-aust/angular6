import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Icecream1Component } from './icecream1.component';

describe('Icecream1Component', () => {
  let component: Icecream1Component;
  let fixture: ComponentFixture<Icecream1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Icecream1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Icecream1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
