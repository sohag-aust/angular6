import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSection2Component } from './text-section2.component';

describe('TextSection2Component', () => {
  let component: TextSection2Component;
  let fixture: ComponentFixture<TextSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSection2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
