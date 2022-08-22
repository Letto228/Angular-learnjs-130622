import { Directive, EventEmitter, Input, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';
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

		this.insertTemplateWithCurrentIndex();
	}

	@Input('appPaginationElementSize') elementSize = 1;
	@Output() emitSelectedIndex = new EventEmitter<() => void>();

	private items: T[] | undefined = undefined;
	private currentIndex: number = 0;
	private allItems: T[] | undefined = undefined;

	constructor(
		private templateRef: TemplateRef<IPaginationDirective<T>>,
		private viewContainerRef: ViewContainerRef
	) {}

	ngOnInit() {
		this.allItems = this.items;
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
			allIndexes: items.map((_, index) => index),
			selectIndex: (index: number) => {
				this.activeSelectedIndex(index);
			},
		};
	}

	private activeSelectedIndex(index: number) {
		// this.emitSelectedIndex(index)
		console.log(index, 'index from template');
	}

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
