import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IPaginationDirective } from './interfaces/pagination-directive.interface';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> {
	@Input() set appPaginationOf(items: T[] | undefined) {
		// если у нас длина элемента боль нуля, то есть если нам пришел маассив с новыми элементами то мы должы очистить предыдуший
		if (!(items && items.length)) {
			this.viewContainerRef.clear();
		}

		this.items = items;
		this.currentIndex = 0;
	}

	private items: T[] | undefined = undefined;
	private currentIndex: number = 0;

	constructor(
		private templateRef: TemplateRef<IPaginationDirective<T>>,
		private viewContainerRef: ViewContainerRef
	) {}

	// ngOnInit() {}

	private insertTemplateWithCurrentIndex() {
		this.viewContainerRef.clear();
		this.viewContainerRef.createEmbeddedView(
			this.templateRef,
			this.getCurrentContext(this.currentIndex, this.items as T[])
		);
	}

	private getCurrentContext(index: number, items: T[]): IPaginationDirective<T> {
		return {
			index,
			$implicit: items[index],
			prev: () => {
				this.prev();
			},
			next: () => {
				this.next();
			},
			activeIndex: () => {
				this.currentActivePage();
			},
		};
	}

	currentActivePage() {}

	prev() {}

	next() {
		const currentNextIndex = this.currentIndex + 1;
		const itemsLength = this.items?.length;

		// if () {
		//
		// }
	}
}
