import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Subject, takeUntil } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { IProduct } from '../../shared/products/product.interface';
import { loadProducts, updateProductsFilrer } from '../../store/products/products.actions';
import { productsFilterSearchNameSelector, productsSelector } from '../../store/products/products.selector';
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

	readonly products$ = this.store.pipe(select(productsSelector));
	readonly searchText$ = this.store.pipe(select(productsFilterSearchNameSelector));
	readonly brands$ = this.brandsService.brands$;

	constructor(
		private readonly brandsService: BrandsService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly store: Store<IState>
	) {}

	ngOnInit() {
		this.listenLoadProducts();
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
	}

	private listenLoadProducts() {
		this.activatedRoute.paramMap
			.pipe(
				map((paramsMap) => paramsMap.get('subCategoryId')),
				takeUntil(this.destroy$)
			)
			.subscribe((subCategoryId) => {
				this.store.dispatch(loadProducts(subCategoryId));
				this.brandsService.loadBrands(subCategoryId);
			});
	}
}
