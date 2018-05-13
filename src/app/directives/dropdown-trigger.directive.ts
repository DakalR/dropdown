import { Directive, ElementRef, OnDestroy, HostListener, Input } from '@angular/core';
import { DropdownDirective } from '@Directives/dropdown.directive';

@Directive({
  selector: '[dropdown-trigger]'
})
export class DropdownTriggerDirective implements OnDestroy {

  private closeDropdownOnOutsideClick: (event: Event) => void;

  @Input('dropdown-trigger') className: string;

  constructor(public dropdown: DropdownDirective,
              private elementRef: ElementRef) {
    this.closeDropdownOnOutsideClick = (event: MouseEvent) => this.closeIfInClosableZone(event);
  }



  @HostListener('click')
  openDropdown() {
    if (this.dropdown.isOpened(this.className)) {
      this.dropdown.close(this.className);
      document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    } else {
      this.dropdown.open(this.className);
      document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
    }
  }



  ngOnDestroy() {
    document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
  }

  private closeIfInClosableZone(event: Event) {
    if (event.target !== this.elementRef.nativeElement
      && !this.elementRef.nativeElement.contains(event.target)) {
      this.dropdown.close(this.className);
      document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    }
  }

}
