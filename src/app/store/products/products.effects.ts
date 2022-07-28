import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsApiService } from '../../shared/products/products-api.service';
import { addProducts, loadProduct, loadProducts } from './products.actions';

@Injectable()
export class ProductsEffects {
	constructor(private actions$: Actions, private productsApiService: ProductsApiService) {}

	loadProducts$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadProducts),
			switchMap(({ subCategoryId }) =>
				this.productsApiService.getProducts$(subCategoryId).pipe(map((products) => addProducts(products)))
			)
		)
	);

	loadProduct$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadProduct),
			switchMap(({ id }) =>
				this.productsApiService.getProduct$(id).pipe(map((product) => addProducts([product as IProduct])))
			)
		)
	);

	addProducts$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(addProducts),
				map(({ products }) => products.length),
				tap((productsLen) => {
					console.log(productsLen);
				})
			),
		{
			dispatch: false,
		}
	);
}
