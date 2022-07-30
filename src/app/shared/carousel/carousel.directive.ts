import { Directive, EventEmitter, Input, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, filter, map, withLatestFrom } from 'rxjs';

interface ICarouselDirective<T> {
	$implicit: T;
	index: number;
	prev: () => void;
	next: () => void;
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnInit {
	@Input() set appCarouselOf(items: T[] | undefined) {
		console.log(items, 'item in from component');
		// if (!(items && items.length)) {
		// 	this.viewContainerRef.clear();
		// }

		if (!items?.length) {
			this.viewContainerRef.clear();

			return;
		}

		// this.items = items;

		this.items$.next(items);
		this.currentIndex$.next(0);

		// this.currentIndex = 0;
		// this.insertTemplateWithCurrentIndex();
	}

	//
	// @Output() emitNext = new EventEmitter<() => void>();
	// @Output() emitPrev = new EventEmitter<() => void>();

	// private items: T[] | undefined = undefined;
	private readonly items$ = new BehaviorSubject<T[] | undefined>(undefined);
	// private currentIndex: number = 0;

	private readonly currentIndex$ = new BehaviorSubject<number>(0);

	constructor(private templateRef: TemplateRef<ICarouselDirective<T>>, private viewContainerRef: ViewContainerRef) {}

	ngOnInit() {
		this.listenCurrentIndexChange();
		// this.emitPrev.emit(this.prev.bind(this));
		// this.emitNext.emit(() => {
		//   this.next();
		// });
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				withLatestFrom(this.items$.pipe(filter(Boolean))),
				map(([index, items]) => this.getCurrentContext(index, items))
			)
			.subscribe((context) => {
				// this.insertTemplateWithCurrentIndex();
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	// метод вставки темплейта с выбранным индексом
	// private insertTemplateWithCurrentIndex() {
	//   this.viewContainerRef.clear(); // зачищаем viewContainer.
	//   this.viewContainerRef.createEmbeddedView(this.templateRef, this.getCurrentContext(this.currentIndex, this.items as T[]));
	// }

	private getCurrentContext(index: number, items: T[]): ICarouselDirective<T> {
		return {
			index,
			$implicit: items[index], // items c необходимым индексом.
			prev: this.prev.bind(this),
			next: () => {
				this.next();
			},
		};
	}

	private next() {
		// const nextIndex = this.currentIndex + 1;
		// const itemsLength = this.items?.length;

		const nextIndex = this.currentIndex$.value + 1;
		const itemsLength = this.items$.value?.length;

		console.log('next method');

		if (!itemsLength) {
			return;
		}

		// short version
		// this.currentIndex = nextIndex < itemsLength ? nextIndex : 0;
		this.currentIndex$.next(nextIndex < itemsLength ? nextIndex : 0);

		// if (nextIndex < itemsLength) {
		//   this.currentIndex = nextIndex;
		//   this.insertTemplateWithCurrentIndex();
		//   return;
		// }
		// this.currentIndex = 0;
		// this.insertTemplateWithCurrentIndex();
	}

	private prev() {
		// const prevIndex = this.currentIndex - 1;
		// const itemsLength = this.items?.length;

		const prevIndex = this.currentIndex$.value - 1;
		const itemsLength = this.items$.value?.length;

		console.log('prev method');

		if (!itemsLength) {
			return;
		}

		// short version
		// this.currentIndex = prevIndex >= 0 ? prevIndex : itemsLength - 1;

		this.currentIndex$.next(prevIndex >= 0 ? prevIndex : itemsLength - 1);
		// if (prevIndex >= 0) {
		//   this.currentIndex = prevIndex;
		//   this.insertTemplateWithCurrentIndex();
		//   return;
		// }

		// this.currentIndex = itemsLength - 1;
		// this.insertTemplateWithCurrentIndex();
	}
}
