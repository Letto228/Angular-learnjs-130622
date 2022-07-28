import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { getParamsFromObject } from '../params/get-params-from-object';
import { IProduct } from './product.interface';
import { IProductsDto } from './products-dto.interface';

@Injectable({ providedIn: 'root' })
export class ProductsApiService {
	constructor(private http: HttpClient) {}

	getProducts$(subCategoryId?: string | null): Observable<IProduct[]> {
		return this.http
			.get<IProduct[]>(`/products`, {
				params: getParamsFromObject({ subCat: subCategoryId }),
			})
			.pipe
			// map(({data}) => data.items),
			// pluck('data', 'items')
			();
	}

	getProduct$(id: string): Observable<IProduct | undefined> {
		return this.http.get<{ data: IProduct }>(`/products/${id}`).pipe(pluck('data'));
	}
}
