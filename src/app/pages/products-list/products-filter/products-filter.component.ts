import { NgForOf } from '@angular/common';
import {
	Component,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
	OnChanges,
	SimpleChanges,
	OnInit,
	OnDestroy,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { IProductsFilter } from '../products-filter.interface';

@Component({
	selector: 'app-products-filter',
	templateUrl: './products-filter.component.html',
	styleUrls: ['./products-filter.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsFilterComponent implements OnChanges, OnInit, OnDestroy {
	@Input() brands!: string[] | null;
	@Input() filter!: IProductsFilter;

	@Output() changeFilter = new EventEmitter<IProductsFilter>();

	private readonly destroy$ = new Subject<void>();

	readonly filterForm = this.formBuilder.group({
		name: ['', { validators: [Validators.required] }],
		brands: this.formBuilder.array([]),
		priceRange: this.formBuilder.group({
			min: 0,
			max: Infinity,
		}),
	});

	constructor(private readonly formBuilder: FormBuilder) {}

	ngOnChanges({ brands, filter }: SimpleChanges): void {
		if (brands) {
			const brandsControlList: FormControl[] = this.brands ? this.brands.map(() => new FormControl(false)) : [];

			this.filterForm.setControl('brands', new FormArray(brandsControlList));
		}

		if (filter) {
			this.filterForm.patchValue(this.filter);
		}
	}

	ngOnInit() {
		this.filterForm.valueChanges.pipe(debounceTime(300), takeUntil(this.destroy$)).subscribe((filter) => {
			this.changeFilter.emit(filter);
		});
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
