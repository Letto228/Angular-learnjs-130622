import { HttpClient } from '@angular/common/http';
import { forwardRef, Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { AppModule } from '../../app.module';
import { ProductsModule } from '../../pages/products-list/products.module';
import { IProduct } from './product.interface';
import { IProductsDto } from './products-dto.interface';

@Injectable()
export class ProductsApiService {
	constructor(private http: HttpClient) {}

	getProducts$(): Observable<IProduct[]> {
		return this.http.get<IProductsDto>('https://course-angular.javascript.ru/api/products/suggestion').pipe(
			// map(({data}) => data.items),
			pluck('data', 'items')
		);
	}
}
