import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class QuestionCanDiactivateGuard implements CanDeactivate<unknown> {
	canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return window.prompt('Форма не сохраниться, хотите уйти?') === 'Yes';
	}
}
