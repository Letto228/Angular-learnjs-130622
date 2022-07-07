import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface ILetDirective<T> {
	appLet: T;
}

@Directive({
	selector: '[appLet]',
})
export class LetDirective<T> {
	@Input() set appLet(value: T) {
		this.viewContainerRef.clear();
		this.viewContainerRef.createEmbeddedView(this.templateRef, { appLet: value });
	}

	constructor(private templateRef: TemplateRef<ILetDirective<T>>, private viewContainerRef: ViewContainerRef) {}
}
