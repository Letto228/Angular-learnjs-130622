import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IProduct } from '../products/product.interface';
import { ProductsApiService } from '../products/products-api.service';

@Injectable({
	providedIn: 'root',
})
export class LoadProductsResolver implements Resolve<IProduct[]> {
	constructor(private readonly productsApiService: ProductsApiService) {}

	resolve(): Observable<IProduct[]> {
		// this.productsStoreService.loadProducts();

		return timer(3000).pipe(
			switchMap(() => {
				// return of(this.productsStoreService.products as IProduct[]);
				// return this.productsStoreService.products$ as Observable<IProduct[]>
				return this.productsApiService.getProducts$() as Observable<IProduct[]>;
			})
		);
		// return timer(3000).pipe(
		//   map(() => productsMock),
		// );
	}
}
