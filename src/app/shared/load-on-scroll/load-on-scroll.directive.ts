import {
	Directive,
	ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';

import { LoadDirection } from '../scroll-with-loading/enums';

@Directive({
	selector: '[appLoadOnScroll]',
})
export class LoadOnScrollDirective {
	private scrollPos = 0;
	readonly scrollOffset = 100;

	@Input() isLoadData!: boolean;
	@Output() loadScrollData = new EventEmitter<LoadDirection>();

	private emitScroll(direction: LoadDirection) {
		this.loadScrollData.emit(direction);
	}

	@HostListener('scroll')
	onScroll() {
		const scrollTop = this.nativeElement.scrollTop;
		const scrollDirection = this.getScrollDirection(scrollTop);
		const reachedBorder = this.reachedBorder(scrollDirection, scrollTop);
		if (reachedBorder) {
			this.emitScroll(reachedBorder);
		}

		this.scrollPos = scrollTop;
	}

	constructor(private elementRef: ElementRef) {}

	private get nativeElement(): HTMLElement {
		return this.elementRef.nativeElement;
	}

	private getScrollDirection(scrollTop: number): string {
		return scrollTop > this.scrollPos ? LoadDirection.After : LoadDirection.Before;
	}

	private reachedBorder(direction: string, scrollTop: number): LoadDirection | false {
		const scrolledHeight = this.nativeElement.scrollHeight - scrollTop;
		const visibleHeight = this.nativeElement.clientHeight + this.scrollOffset;

		if (this.isLoadData) {
			return false;
		}

		if (
			(direction == LoadDirection.After && scrolledHeight < visibleHeight) ||
			(direction == LoadDirection.Before && scrollTop < this.scrollOffset)
		) {
			return direction;
		}

		return false;
	}
}
