import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { IProduct } from './product.interface';
import { IProductsDto } from './products-dto.interface';

@Injectable({ providedIn: 'root' })
export class ProductsApiService {
	constructor(private http: HttpClient) {}

	getProducts$(subCategoryId?: string | null): Observable<IProduct[]> {
		// const params = new HttpParams({
		// 	fromObject: {
		// 		subCat: subCategoryId as string,
		// 	}
		// });

		// if (subCategoryId) {
		// 	params.appendAll({subCat: subCategoryId});
		// 	console.log(subCategoryId, params);
		// }

		return this.http
			.get<IProductsDto>(`/products`, {
				params: subCategoryId
					? {
							subCat: subCategoryId,
					  }
					: {},
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
