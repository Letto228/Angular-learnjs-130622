import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, pluck, tap } from 'rxjs';
import { BASE_URL } from './base-url.token';
import { productsMock } from '../products/products.mock';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
	constructor(@Inject(BASE_URL) private readonly baseUrl: string) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const newRequest = request.clone({
			url: this.baseUrl + request.url,
		});

		return next.handle(newRequest);
		// return next.handle(newRequest).pipe(
		// map((httpResponse: HttpEvent<unknown>) => {
		//   if (httpResponse typeof HttpRequest) {

		//   }
		// }),
		// catchError(() => {
		//   console.log('error');
		//   return of(new HttpResponse({body: {items: productsMock}}));
		// }),
		// );
	}
}
