import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy {
	private readonly destroy$ = new Subject<void>();

	readonly products$ = this.productsStoreService.products$;
	// readonly products$ = this.activatedRoute.data.pipe(
	// 	map(data => data['products']),
	// );

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute
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
