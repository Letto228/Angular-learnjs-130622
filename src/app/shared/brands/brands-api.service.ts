import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BrandsApiService {
	constructor(private readonly http: HttpClient) {}

	getBrands$(subCategoryName: string | null): Observable<string[]> {
		return this.http
			.get<{ data: string[] }>('/brands', {
				params: subCategoryName ? { subCat: subCategoryName } : {},
			})
			.pipe(pluck('data'));
	}
}
