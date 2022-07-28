import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, of, Subject, timer } from 'rxjs';

const preloadSubject = new Subject<string>();

setTimeout(() => {
	preloadSubject.next('product');
}, 3000);

@Injectable({
	providedIn: 'root',
})
export class CustomPreloading implements PreloadingStrategy {
	preload(route: Route, load: () => Observable<any>): Observable<any> {
		return preloadSubject.asObservable().pipe(mergeMap((path) => (route.path?.includes(path) ? load() : of(null))));
		// if (route.data?.['preload']) {
		//     console.log('Preloading ' + route.path);

		//     return load();
		// }

		// console.log('No preloading ' + route.path);

		// return of(null);
	}
}
