import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class QuestionCanActivateGuard implements CanActivate {
	constructor(private readonly router: Router) {}

	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return (
			window.prompt('Хотите посетить данную страницу?') === 'Yes' ||
			this.router.createUrlTree(['/products-list'], { queryParams: { data: 123 } })
		);
	}
}
