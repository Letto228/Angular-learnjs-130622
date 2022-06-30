import { ChangeDetectorRef, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
	constructor(private cd: ChangeDetectorRef) {}

	@HostBinding('style.boxShadow')
	private boxShadow = '';

	@HostListener('click')
	onClick() {
		this.boxShadow = this.boxShadow ? '' : 'inset 0 0 10px #000';
	}

	@HostListener('isShadowActive', ['$event'])
	onShadow(isShadowActive: boolean) {
		console.log('isShadowActive work');
		this.boxShadow = !isShadowActive ? '' : 'inset 0 0 10px #000';
		console.log(this.boxShadow, isShadowActive);
	}

	// [prop]="value"
	// value$.subcribe((value) => {
	//   this.value = value;
	//   // this.changeDetectorRef.markForCheck();
	// })

	// [prop]="value$ | async"
}
