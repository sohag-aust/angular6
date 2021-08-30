import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListenerDirective]'
})
export class HostListenerDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') isClicked() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseover') isMouseOvered() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseout') isMouseOut() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
  }
}
