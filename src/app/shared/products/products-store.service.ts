import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { IProduct } from './product.interface';
import { ProductsApiService } from './products-api.service';

@Injectable({
	providedIn: 'root',
})
export class ProductsStoreService {
	private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

	constructor(private productsApi: ProductsApiService) {}

	get products$(): Observable<IProduct[] | null> {
		return this.productsStore$.asObservable();
	}

	getProduct(id: string): Observable<IProduct | undefined> {
		return this.products$.pipe(
			filter(Boolean),
			map((products) => products.find(({ _id }) => _id === id))
		);
	}

	loadProducts() {
		this.productsApi.getProducts$().subscribe((products) => {
			this.productsStore$.next(products);
		});
	}

	loadProduct(id: string) {
		const prevProducts = this.productsStore$.value || [];

		this.productsApi
			.getProduct$(id)
			.pipe(filter(Boolean))
			.subscribe((product) => {
				this.productsStore$.next([...prevProducts, product]);
			});
	}
}
