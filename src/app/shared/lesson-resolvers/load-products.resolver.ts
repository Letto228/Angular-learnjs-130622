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
		return timer(3000).pipe(
			switchMap(() => {
				return this.productsApiService.getProducts$() as Observable<IProduct[]>;
			})
		);
	}
}
