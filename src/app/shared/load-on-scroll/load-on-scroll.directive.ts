import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Directive({
  selector: '[appLoadOnScroll]'
})
export class LoadOnScrollDirective {
  private scrollPos = 0;
  readonly scrollOffset = 100;

  @Input() isLoadData!:boolean;
  @Output() loadScrollData = new EventEmitter<string>();

  private emitScroll(direction: string){
      this.loadScrollData.emit(direction);
  }

  @HostListener('scroll')
  onScroll(){
    if (this.isLoadData) {
      return;
    }
    const st = this.nativeElement.scrollTop;
    if(st > this.scrollPos) { //down
      if((this.nativeElement.scrollHeight - st) < (this.nativeElement.clientHeight + this.scrollOffset)) {
        this.emitScroll('after');
      }
    } else { // up
      if(st < this.scrollOffset) {
        this.emitScroll('before');
      }
    }
    this.scrollPos = st;
  }

  constructor(private elementRef: ElementRef) {}

  private get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}
