import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#c5ff3d');
  }

  changeBG(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }

  
}
