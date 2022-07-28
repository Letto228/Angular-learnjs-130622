import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

import { ProductsApiService } from './products-api.service';
import { productsMock } from './products.mock';

// const httpClient: HttpClient = {
//   get<T>(_url: string) {},
// } as HttpClient;

describe('Products.ApiService', () => {
	let service: ProductsApiService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				// {
				//   provide: HttpClient,
				//   useValue: httpClient,
				// }
			],
		});

		service = TestBed.inject(ProductsApiService);
		httpMock = TestBed.inject(HttpTestingController);

		// spyOn(httpClient, 'get').and.returnValue(of({data: {items: productsMock}}))
	});

	it('Загрузка продуктов', (done) => {
		service.getProducts$().subscribe((products) => {
			expect(products).toEqual(productsMock);

			done();
		});

		httpMock.expectOne('/products').flush({ data: { items: productsMock } });
	});
});
