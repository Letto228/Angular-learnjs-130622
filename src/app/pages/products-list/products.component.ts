import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, Subscription, takeUntil, timer } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsApiService } from '../../shared/products/products-api.service';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { productsMock } from '../../shared/products/products.mock';

// NullInjector

// ^
// |

// PlatformInjector

// ^
// |

// RootInjector (AppModuleInjector)

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
	// products: IProduct[] | undefined = undefined;
	readonly products$ = this.productsStoreService.products$;

	constructor(
		private readonly productsStoreService: ProductsStoreService
	) // private readonly productsStoreServiceStr: 'ProductsStoreService',
	// @Inject(ProductsStoreService) private readonly productsStoreService: ProductsStoreService,
	// @Inject('ProductsStoreService') private readonly productsStoreServiceStr: ProductsStoreService,
	{}

	ngOnInit() {
		// console.log(
		// 	this.productsStoreService,
		// 	this.productsStoreServiceStr,
		// 	this.productsStoreService === this.productsStoreServiceStr,
		// )
		this.productsStoreService.loadProducts();
	}

	// private readonly subsription: Subscription = new Subscription();
	// private readonly destroy$ = new Subject<void>();

	// constructor(private changeDetectorRef: ChangeDetectorRef) {}

	// ngOnInit() {
	// this.products$
	// 	.pipe(
	// 		takeUntil(this.destroy$),
	// 	)
	// 	.subscribe((products) => {
	// 		this.products = products;
	// 		this.changeDetectorRef.markForCheck();
	// 	})
	// }

	// ngOnDestroy() {
	// this.subsription?.unsubscribe();
	// this.destroy$.next();
	// this.destroy$.complete();
	// }

	trackBy(_: number, item: IProduct) {
		return item._id;
	}

	getJsonProduct<T>(product: T): string {
		console.log('getJsonProduct');
		return JSON.stringify(product);
	}
}
