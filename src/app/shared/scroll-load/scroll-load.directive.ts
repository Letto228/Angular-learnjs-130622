import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Direction } from './direction.enum';

@Directive({
	selector: '[appScrollLoad]',
})
export class ScrollLoadDirective {
	@Input() isLoadingData: boolean = false;

	@Output() scrollLoadEvent = new EventEmitter<Direction>();

	readonly scrollPosition: number = 0;
	readonly offset: number = 100;

	constructor(private elementRef: ElementRef) {}

	@HostListener('scroll')
	onScrollLoad() {
		if (this.isLoadingData) {
			return;
		}

		if (this.calculateScroll) {
			this.scrollLoadEmitting(Direction.BEFORE);
		} else if (this.scrollTop > this.scrollPosition) {
			this.scrollLoadEmitting(Direction.AFTER);
		}
	}

	private scrollLoadEmitting(direction: Direction) {
		this.scrollLoadEvent.emit(direction);
	}

	private get nativeElement(): HTMLElement {
		return this.elementRef.nativeElement;
	}

	private get scrollTop(): number {
		return this.nativeElement.scrollTop;
	}

	private get calculateScroll(): boolean {
		return this.nativeElement.scrollHeight - this.scrollTop < this.nativeElement.clientHeight + this.offset;
	}
}
