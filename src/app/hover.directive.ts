import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('class.hovered') isHovered = false;

  @HostListener('mouseover') onMouseLeave() {
    this.isHovered = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.isHovered = false;
  }

}
