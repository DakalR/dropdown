import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef) {
  }

  open(className) {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.classList.add(className || 'open');
  }

  close(className) {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.classList.remove(className || 'open');
  }

  isOpened(className) {
    const element: HTMLElement = this.elementRef.nativeElement;
    return element.classList.contains(className || 'open');
  }

}
