import { Directive, Input, ElementRef, Renderer, DoCheck } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {
  constructor(public el: ElementRef, public renderer: Renderer) {
    console.log('MyHidden2Directive # constructor() called.')
  }
  @Input() appHidden: boolean;
  ngDoCheck() {
    if (this.appHidden) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', '');
    }
  }
}
