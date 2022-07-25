import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { addProducts } from '../../store/products/products.actions';
import { IState } from '../../store/reducer';
import { IProduct } from './product.interface';
import { ProductsApiService } from './products-api.service';

@Injectable({
	providedIn: 'root',
})
export class ProductsStoreService {
	private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

	constructor(private productsApi: ProductsApiService, private readonly store: Store<IState>) {}

	get products$(): Observable<IProduct[] | null> {
		return this.productsStore$.asObservable();
	}

	get products(): IProduct[] | null {
		return this.productsStore$.value;
	}

	getProduct(id: string): Observable<IProduct | undefined> {
		return this.products$.pipe(
			filter(Boolean),
			map((products) => products.find(({ _id }) => _id === id))
		);
	}

	loadProducts(subCategoryId?: string | null) {
		this.productsApi.getProducts$(subCategoryId).subscribe((products) => {
			this.productsStore$.next(products);
			this.store.dispatch(addProducts(products));
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
