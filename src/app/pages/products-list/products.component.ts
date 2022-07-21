import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
	auditTime,
	debounceTime,
	distinctUntilChanged,
	map,
	Observable,
	startWith,
	Subject,
	takeUntil,
	tap,
} from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { isStringAsyncValidator } from '../../shared/validators/is-string-async.validator';
import { isStringValidator } from '../../shared/validators/is-string.validator';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy {
	private readonly destroy$ = new Subject<void>();

	readonly products$ = this.productsStoreService.products$;

	searchText = '';
	searchTextControl = new FormControl('12', {
		validators: [Validators.minLength(3)],
		asyncValidators: this.isStringAsyncValidator.bind(this),
		updateOn: 'change',
	});

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
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly changeDetectorRef: ChangeDetectorRef
	) {}

	searchText$ = this.searchTextControl.valueChanges.pipe(
		startWith(this.searchTextControl.value),
		debounceTime(300),
		distinctUntilChanged(),
		tap(console.log)
	);

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

	private listenLoadProducts() {
		this.activatedRoute.paramMap
			.pipe(
				map((paramsMap) => paramsMap.get('subCategoryId')),
				takeUntil(this.destroy$)
			)
			.subscribe((subCategoryId) => {
				this.productsStoreService.loadProducts(subCategoryId);
			});
	}
}
