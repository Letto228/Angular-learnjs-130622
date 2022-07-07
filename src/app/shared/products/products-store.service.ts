import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from './product.interface';
import { ProductsApiService } from './products-api.service';

// @Injectable({
// providedIn: 'root'
// })
@Injectable()
export class ProductsStoreService {
	private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

	constructor(private productsApi: ProductsApiService) {}

	get products$(): Observable<IProduct[] | null> {
		return this.productsStore$.asObservable();
	}

	loadProducts() {
		this.productsApi.getProducts$().subscribe((products) => {
			this.productsStore$.next(products);
		});
	}
}
