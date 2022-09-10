import {
	Directive,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';
import { IPaginationDirective } from './interfaces/pagination-directive.interface';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges {
	@Input() appPaginationOf: T[] | undefined;
	@Input('appPaginationElementSize') elementSize = 1;
	@Output() emitSelectedIndex = new EventEmitter<() => void>();

	private items: T[] | Array<T[]> | undefined = undefined;
	private currentIndex: number = 0;
	// private allItems: T[] | undefined = undefined;

	constructor(
		private templateRef: TemplateRef<IPaginationDirective<T>>,
		private viewContainerRef: ViewContainerRef
	) {}

	ngOnInit() {
		console.log(this.appPaginationOf, 'appPaginationOf');
	}

	ngOnChanges({ appPaginationOf, appPaginationElementSize }: SimpleChanges) {
		if (appPaginationOf || appPaginationElementSize) {
			if (!(this.appPaginationOf && this.appPaginationOf.length)) {
				this.viewContainerRef.clear();
			}
		}

		this.items = this.elementSize > 1 ? this.getGroupedItemsListByElementsSize() : this.appPaginationOf;
		this.currentIndex = 0;

		this.insertTemplateWithCurrentIndex();
	}

	private getGroupedItemsListByElementsSize() {
		return this.appPaginationOf?.reduce(
			(acc: Array<T[]>, item: T): Array<T[]> => {
				const lastGroupIndex = acc.length - 1;
				const lastGroupLength = acc[lastGroupIndex].length;

				if (lastGroupLength === this.elementSize) {
					return [...acc, [item]];
				}

				acc[lastGroupIndex].push(item);
				return [...acc];
			},
			[[]]
		);
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
