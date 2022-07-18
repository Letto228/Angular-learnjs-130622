import { HttpClient } from '@angular/common/http';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { AppModule } from '../../app.module';
import { ProductsModule } from '../../pages/products-list/products.module';
import { baseUrl } from '../base-url/base-url.const';
import { BASE_URL } from '../base-url/base-url.token';
import { IProduct } from './product.interface';
import { IProductsDto } from './products-dto.interface';

@Injectable({ providedIn: 'root' })
export class ProductsApiService {
	constructor(private http: HttpClient) {}

	getProducts$(): Observable<IProduct[]> {
		return this.http
			.get<IProductsDto>(`/products/suggestion`, {
				headers: { time: Date.now().toFixed() },
			})
			.pipe(
				// map(({data}) => data.items),
				pluck('data', 'items')
			);
	}

	getProduct$(id: string): Observable<IProduct | undefined> {
		return this.http.get<{ data: IProduct }>(`/products/${id}`).pipe(pluck('data'));
	}
}
