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

	// filter: IProductsFilter = {
	//   name: '',
	//   brands: [],
	//   priceRange: {
	//     min: 0,
	//     max: Infinity,
	//   }
	// }

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

	// brandsSubscriber: Subscription | undefined;

	ngOnChanges({ brands, filter }: SimpleChanges): void {
		if (brands) {
			const brandsControlList: FormControl[] = this.brands ? this.brands.map(() => new FormControl(false)) : [];

			this.filterForm.setControl('brands', new FormArray(brandsControlList));

			// if (this.brandsSubscriber) {
			//   this.brandsSubscriber.unsubscribe();
			// }

			// this.brandsSubscriber = (this.filterForm.get('brands') as FormArray)
			//   .valueChanges
			//   .pipe(
			//     map(this.getBrandsListFromArray.bind(this)),
			//   )
			//   .subscribe(console.log);
		}

		if (filter) {
			this.filterForm.patchValue(this.filter);
		}
	}

	ngOnInit() {
		this.filterForm.valueChanges.pipe(debounceTime(300), takeUntil(this.destroy$)).subscribe((filter) => {
			this.changeFilter.emit(filter);
		});
		// this.filterForm.valueChanges.subscribe(() => {
		// 	console.log(this.filterForm.getRawValue());
		// });
		// this.filterForm.get('priceRange')?.patchValue({
		// 	min: 1,
		// 	max: 2,
		// });

		// setTimeout(() => {
		// 	this.filterForm.updateValueAndValidity();
		// 	this.filterForm.get(['priceRange', 'min'])?.disable();
		// }, 2000);
		// setTimeout(() => {
		// 	this.filterForm.get(['priceRange', 'min'])?.enable();
		// }, 3000);
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	// onSubmit(value: any) {
	//   const filter: IProductsFilter = {
	//     ...value,
	//     brands: this.getBrandsList(value.brands),
	//   };

	//   this.changeFilter.emit(filter);
	// }

	getBrandsListFromObject(brands: Record<string, boolean | string>): IProductsFilter['brands'] {
		return Object.entries(brands)
			.filter(([_, isActive]) => isActive)
			.map(([name]) => name);
	}

	getBrandsListFromArray(brandsValueList: boolean[]): IProductsFilter['brands'] {
		if (!this.brands) {
			return [];
		}

		return this.brands.filter((_, index) => brandsValueList[index]);

		// return brandsValueList.reduce(
		//   (brands, isActive, index) => isActive
		//     ? [
		//       ...brands,
		//       (this.brands as string[])[index],
		//     ]
		//     : brands,
		//   [] as string[],
		// )
	}

	onClick() {
		// console.log({
		// 	...this.filterForm.value,
		// 	brands: this.getBrandsListFromArray(this.filterForm.value.brands),
		// });
	}

	// onTogleBrand(isActive: boolean, brand: string) {
	//   if (isActive) {
	//     this.filter.brands.push(brand);

	//     return;
	//   }

	//   this.filter.brands = this.filter.brands.filter(reviewBrand => reviewBrand !== brand);
	// }
}
