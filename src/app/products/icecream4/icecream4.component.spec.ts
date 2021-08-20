import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Icecream4Component } from './icecream4.component';

describe('Icecream4Component', () => {
  let component: Icecream4Component;
  let fixture: ComponentFixture<Icecream4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Icecream4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Icecream4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
