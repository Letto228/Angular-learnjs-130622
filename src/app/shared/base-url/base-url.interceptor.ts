import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './base-url.token';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
	constructor(@Inject(BASE_URL) private readonly baseUrl: string) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const newRequest = request.clone({
			url: this.baseUrl + request.url,
		});

		return next.handle(newRequest);
	}
}
