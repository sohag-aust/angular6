import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Icecream2Component } from './icecream2.component';

describe('Icecream2Component', () => {
  let component: Icecream2Component;
  let fixture: ComponentFixture<Icecream2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Icecream2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Icecream2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
