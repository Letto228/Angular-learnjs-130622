import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { CategoriesApiService } from './categories-api.service';
import { ICategory } from './category.interface';

@Injectable({
	providedIn: 'root',
})
export class CategoriesStoreService {
	private readonly categoriesStore$ = new BehaviorSubject<ICategory[] | null>(null);

	constructor(private categoriesApiService: CategoriesApiService) {}

	get categories$(): Observable<ICategory[] | null> {
		return this.categoriesStore$.asObservable();
	}

	loadCategories() {
		this.categoriesApiService.loadCategories$().subscribe((categories) => {
			this.categoriesStore$.next(categories);
		});
	}
}
