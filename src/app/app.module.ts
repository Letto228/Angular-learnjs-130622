import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { ProductsModule } from './pages/products-list/products.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './components/popup-host/popup-host.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';
import { ProductsStoreService } from './shared/products/products-store.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsApiService } from './shared/products/products-api.service';
import { Observable, of } from 'rxjs';
import { IProduct } from './shared/products/product.interface';
import { productsMock } from './shared/products/products.mock';
import { environment } from '../environments/environment';
import { BASE_URL } from './shared/base-url/base-url.token';
import { baseUrl } from './shared/base-url/base-url.const';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';

// const productsApiServiceMock: ProductsApiService = {
// 	getProducts$(): Observable<IProduct[]> {
// 		return of(productsMock);
// 	}
// } as unknown as ProductsApiService

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HeaderModule,
		SidenavModule,
		BrowserAnimationsModule,
		ProductsModule,
		PopupHostModule,
		MatListModule,
		InsertShadowModule,
		HttpClientModule,
	],
	providers: [
		// ProductsStoreService,
		// ProductsApiService,
		{
			provide: ProductsStoreService,
			useClass: ProductsStoreService,
			// useFactory: (productsApiService: ProductsApiService) => new ProductsStoreService(productsApiService),
			// deps: [ProductsApiService],
		},
		// {
		// 	provide: BASE_URL,
		// 	useValue: '',
		// },
		// {
		// provide: 'ProductsStoreService',
		// provide: 'ProductsStoreService',
		// useClass: ProductsStoreService,
		// useExisting: ProductsStoreService,
		// useFactory: (productsStoreService: ProductsStoreService) => productsStoreService,
		// deps: [ProductsStoreService]
		// },
		// value 'ProductsStoreService' === value ProductsStoreService
		// {
		// 'ProductsStoreService': ...,
		// ProductsStoreService: ...,
		// }
		{
			provide: ProductsApiService,
			useClass: ProductsApiService,
			// useFactory: (httpClient: HttpClient) => new ProductsApiService(httpClient),
			// deps: [HttpClient],
			// useValue: productsApiServiceMock,
			// useFactory: () => productsApiServiceMock,
			// useFactory: () => environment.production
			// 	? {
			// 		getProducts$(): Observable<IProduct[]> {
			// 			return of([]);
			// 		}
			// 	}
			// 	: {
			// 		getProducts$(): Observable<IProduct[]> {
			// 			return of(productsMock);
			// 		}
			// 	}
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: RootInterceptor,
		// 	multi: true,
		// },
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: CatchErrorInterceptor,
		// 	multi: true,
		// },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
