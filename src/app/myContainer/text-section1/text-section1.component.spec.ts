import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSection1Component } from './text-section1.component';

describe('TextSection1Component', () => {
  let component: TextSection1Component;
  let fixture: ComponentFixture<TextSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSection1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
