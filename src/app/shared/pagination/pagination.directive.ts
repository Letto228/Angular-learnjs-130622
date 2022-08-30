import {
	Directive,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';
import { IPaginationDirective } from './interfaces/pagination-directive.interface';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges {
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

	// доработки начинаются тут. Во первых мы быдем реагировать на изменения ипутов appPaginationOf и appPaginationElementSize
	// при их изменении мы будем пересчитывать наш массив, т.к. от этого завит группировка, а следовательн ои изменение нашего view
	// P.S. по факту сюда я вынес то, что у тебя было в сеттере appPaginationOf, т.к. пересчет надо делать и при изменении appPaginationElementSize
	ngOnChanges({ appPaginationOf, appPaginationElementSize }: SimpleChanges) {
		if (appPaginationOf || appPaginationElementSize) {
			if (!(this.appPaginationOf && this.appPaginationOf.length)) {
				this.viewContainerRef.clear();
			}

			this.items = this.elementSize > 1 ? this.getGroupedItemsListByElementsSize() : this.appPaginationOf; // тут я добавил группировку
			// Она зависит от того, находится ли у нас 1 элемент на странице или несколько
			// Если элемент 1 - то в items будет T[], то есть исходный массив, в нашем случаи IProduct[]
			// Если элементов больше 1 - то в items будет Array<T[]>, то есть сгруппированный массив, в нашем случаи Array<IProduct[]>
			this.currentIndex = 0;

			this.insertTemplateWithCurrentIndex();
		}
	}

	// Ниже собственно, функция группировки, в ней не должно быть ничего сложного, просто поочередно заполняем общий массив массивами с отображаемыми элементами
	// Если говорить с точки зрения бизнес логики - тут мы собираем элементы для каждой страницы пагинации
	private getGroupedItemsListByElementsSize(): Array<T[]> | undefined {
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
			$implicit: items[index], // Тут ты кладешь в $implicit - Product, а мы хотим там видеть массив с каким то кол-во продуктов,
			// то есть тебе надо смотреть на elementSize и решать, что положить в $implicit - IProduct or IProduct[]
			// лучше вссего сгруппировать элементы вначале, и использовать уже сгруппированнные элементы в директиве, в таком случаи тут доработки не требуются
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
