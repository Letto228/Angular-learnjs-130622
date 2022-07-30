import { Directive, Input, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { IPaginationDirective } from './interfaces/pagination-directive.interface';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit {
	@Input() set appPaginationOf(items: T[] | undefined) {
		// если у нас длина элемента боль нуля, то есть если нам пришел маассив с новыми элементами то мы должы очистить предыдуший
		if (!(items && items.length)) {
			this.viewContainerRef.clear();
		}

		this.items = items;
		this.currentIndex = 0;
	}

	@Input() set activePageIndex(pageIndex: number) {
		this.pageIndex = pageIndex;
	}

	@Output()
	pageIndex: number = 4;

	private items: T[] | undefined = undefined;
	private currentIndex: number = 0;

	constructor(
		private templateRef: TemplateRef<IPaginationDirective<T>>,
		private viewContainerRef: ViewContainerRef
	) {}

	ngOnInit() {
		console.log(this.items, 'items from products');
		console.log(this.items?.[0], 'items from products');
	}

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
			activeIndex: (index: number) => {
				this.currentActivePage(index);
			},
		};
	}

	currentActivePage(index: number) {}

	prev() {
		const prevIndex = this.currentIndex - 1;
		const itemsLength = this.items?.length;

		if (!itemsLength) {
			return;
		}

		if (prevIndex >= 0) {
			this.currentIndex = prevIndex;
			this.insertTemplateWithCurrentIndex();
			return;
		}

		// если он у нас prevIndex меньше нуля, то есть если это бесконечная itemsLength - 1, то есть последний индекс массива.
		this.currentIndex = itemsLength - 1;

		this.insertTemplateWithCurrentIndex();
	}

	next() {
		const nextIndex = this.currentIndex + 1;
		const itemsLength = this.items?.length;

		if (!itemsLength) {
			return;
		}

		if (nextIndex < itemsLength) {
			this.currentIndex = nextIndex;
			this.insertTemplateWithCurrentIndex();
			return;
		}

		// когда следущуюий индек больше или равен длине массима тогда зануляем currentIndex.
		this.currentIndex = 0;
		this.insertTemplateWithCurrentIndex();
	}
}
