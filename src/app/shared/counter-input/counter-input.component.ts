import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: CounterInputComponent,
		},
	],
})
export class CounterInputComponent implements ControlValueAccessor {
	@Input() step: number = 1;

	counter: number = 0;
	isDisable: boolean = false;
	onChange!: (_: any) => void;
	onTouched!: () => void;

	private touched = false;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	writeValue(newCounter: any) {
		this.counter = newCounter;

		this.changeDetectorRef.markForCheck();
	}

	setDisabledState(isDisable: boolean) {
		this.isDisable = isDisable;

		this.changeDetectorRef.markForCheck();
	}

	registerOnChange(fn: (_: any) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	back() {
		this.counter -= this.step;

		this.onChange(this.counter);
		this.markTouched();
	}

	next() {
		this.counter += this.step;

		this.onChange(this.counter);
		this.markTouched();
	}

	private markTouched() {
		if (this.touched) {
			return;
		}

		this.touched = true;

		this.onTouched();
	}
}
