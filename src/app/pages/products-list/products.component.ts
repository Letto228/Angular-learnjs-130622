import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
	auditTime,
	debounceTime,
	distinctUntilChanged,
	map,
	Observable,
	pluck,
	startWith,
	Subject,
	switchMap,
	takeUntil,
	tap,
} from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsApiService } from '../../shared/products/products-api.service';
import { isStringAsyncValidator } from '../../shared/validators/is-string-async.validator';
import { addProducts, loadProducts, updateProductsFilrer } from '../../store/products/products.actions';
import { productsFilterSearchNameSelector, productsSelector } from '../../store/products/products.selector';
import { PRODUCTS_FEATURE } from '../../store/products/products.state';
import { IState } from '../../store/reducer';
import { IProductsFilter } from './products-filter.interface';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy {
	private readonly destroy$ = new Subject<void>();

	// readonly products$ = this.productsStoreService.products$;
	readonly products$ = this.store.pipe(select(productsSelector));
	readonly brands$ = this.brandsService.brands$;

	// searchText = '';
	// searchTextControl = new FormControl('12', {
	// 	validators: [Validators.minLength(3)],
	// 	asyncValidators: this.isStringAsyncValidator.bind(this),
	// 	updateOn: 'change',
	// });

	private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
		return isStringAsyncValidator(control).pipe(
			tap(() => {
				this.changeDetectorRef.markForCheck();
			})
		);
	}

	// readonly products$ = this.activatedRoute.data.pipe(
	// 	map(data => data['products']),
	// );

	constructor(
		// private readonly productsStoreService: ProductsStoreService,
		private readonly productsApiService: ProductsApiService,
		private readonly brandsService: BrandsService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly store: Store<IState>
	) {}

	searchText$ = this.store.pipe(select(productsFilterSearchNameSelector));

	ngOnInit() {
		this.listenLoadProducts();
		// this.searchTextControl.valueChanges.subscribe(console.log);
		// this.searchTextControl.setValue('321');
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	trackBy(_: number, item: IProduct) {
		return item._id;
	}

	onFilterChange(filter: IProductsFilter) {
		this.store.dispatch(updateProductsFilrer(filter));
		// console.log(filter);
	}

	private listenLoadProducts() {
		this.activatedRoute.paramMap
			.pipe(
				map((paramsMap) => paramsMap.get('subCategoryId')),
				// tap(subCategoryId => {
				// 	this.brandsService.loadBrands(subCategoryId);
				// }),
				// switchMap((subCategoryId) => this.productsApiService.getProducts$(subCategoryId)),
				takeUntil(this.destroy$)
			)
			.subscribe((subCategoryId) => {
				// this.productsStoreService.loadProducts(subCategoryId);
				// this.store.dispatch(addProducts(products));
				this.store.dispatch(loadProducts(subCategoryId));
				this.brandsService.loadBrands(subCategoryId);
			});
	}
}
