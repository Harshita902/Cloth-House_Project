import { Directive,ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  @HostBinding('style.border') border:any;string:any;
  constructor(private er:ElementRef) { 
    this.er.nativeElement.style.color='black';
    this .er.nativeElement.style.backgroundColor="gray";
  }
@HostListener('mouseover') onHover()
{
  this.er.nativeElement.style.color="brown";
}
@HostListener('mouseout') onMouseOut()
{
  this.er.nativeElement.style.color="black";
  this.er.nativeElement.style.padding="20px";

}
}