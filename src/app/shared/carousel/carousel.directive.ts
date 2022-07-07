import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, filter, map, withLatestFrom } from 'rxjs';

interface ICarouselDirective<T> {
	$implicit: T | T[];
	index: number;
	next: () => void;
	back: () => void;
	selectIndex: (index: number) => void;
	allIndexes: number[];
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnInit, OnChanges {
	@Input() appCarouselElementsSize = 1;
	@Input() appCarouselOf: T[] | undefined;

	private readonly items$ = new BehaviorSubject<Array<T[]> | T[] | undefined>(undefined);
	private readonly currentIndex$ = new BehaviorSubject<number>(0);

	constructor(private templateRef: TemplateRef<ICarouselDirective<T>>, private viewContainerRef: ViewContainerRef) {}

	ngOnChanges({ appCarouselOf, appCarouselElementsSize }: SimpleChanges): void {
		if (appCarouselOf || appCarouselElementsSize) {
			if (!this.appCarouselOf?.length) {
				this.viewContainerRef.clear();

				return;
			}

			this.items$.next(this.getGroupedItems(this.appCarouselOf));
			this.currentIndex$.next(0);
		}
	}

	ngOnInit() {
		this.listenCurrentIndexChange();
	}

	private getGroupedItems(items: T[]): Array<T[]> | T[] {
		return this.appCarouselElementsSize <= 1
			? items
			: items.reduce(
					(groupedItems: Array<T[]>, item: T) => {
						const groupedItemsLastIndex = groupedItems.length - 1;

						if (groupedItems[groupedItemsLastIndex].length < this.appCarouselElementsSize) {
							groupedItems[groupedItemsLastIndex].push(item);

							return groupedItems;
						}

						return [...groupedItems, [item]];
					},
					[[]]
			  );
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				withLatestFrom(this.items$.pipe(filter(Boolean))),
				map(([index, items]) => this.getCurrentContext(index, items))
			)
			.subscribe((context) => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(index: number, items: Array<T[]> | T[]): ICarouselDirective<T> {
		return {
			index,
			$implicit: items[index],
			allIndexes: items.map((_, index) => index),
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
			selectIndex: (index: number) => {
				this.selectIndex(index);
			},
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const itemsLen = this.items$.value?.length;

		if (!itemsLen) {
			return;
		}

		this.currentIndex$.next(nextIndex < itemsLen ? nextIndex : 0);
	}

	private back() {
		const prevIndex = this.currentIndex$.value - 1;
		const itemsLen = this.items$.value?.length;

		if (!itemsLen) {
			return;
		}

		this.currentIndex$.next(prevIndex >= 0 ? prevIndex : itemsLen - 1);
	}

	private selectIndex(index: number) {
		this.currentIndex$.next(index);
	}
}
