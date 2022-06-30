import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[appNgClass]',
})
export class NgClassDirective implements OnChanges {
	@Input() appNgClass: Record<string, boolean> = {};

	constructor(private elementRef: ElementRef) {}

	private get nativeElement(): HTMLElement {
		return this.elementRef.nativeElement;
	}

	ngOnChanges({ appNgClass }: SimpleChanges): void {
		const prevValue: Record<string, boolean> = appNgClass.previousValue;

		if (!prevValue) {
			Object.entries(this.appNgClass).forEach(([className, isActive]) => {
				this.toggleClass(className, isActive);
			});

			return;
		}

		Object.entries(this.appNgClass)
			.filter(([className, isActive]) => prevValue[className] !== isActive)
			.forEach(([className, isActive]) => {
				this.toggleClass(className, isActive);
			});
	}

	private toggleClass(className: string, isActive: boolean) {
		if (isActive) {
			this.nativeElement.classList.add(className);

			return;
		}

		this.nativeElement.classList.remove(className);
	}
}
