import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface IContextAppFor<T> {
	$implicit: T;
}

// IContextAppFor<IProduct> => $implicit: Product;
// IContextAppFor<string> => $implicit: string;

@Directive({
	selector: '[appFor]',
})
export class ForDirective<T> {
	@Input() set appForOf(array: T[]) {
		this.viewContainerRef.clear();
		if (array) {
			array.forEach((item) => {
				const context: IContextAppFor<T> = { $implicit: item };
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
		}
	}

	constructor(private templateRef: TemplateRef<IContextAppFor<T>>, private viewContainerRef: ViewContainerRef) {}
}
