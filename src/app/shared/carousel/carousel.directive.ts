import { Directive, EventEmitter, Input, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, map, withLatestFrom } from 'rxjs';

interface ICarouselDirective<T> {
	$implicit: T;
	index: number;
	next: () => void;
	back: () => void;
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnInit {
	@Input() set appCarouselOf(items: T[] | undefined) {
		if (!items?.length) {
			this.viewContainerRef.clear();

			return;
		}

		this.items$.next(items);
		this.currentIndex$.next(0);
	}

	// @Output() emitNext = new EventEmitter<() => void>();
	// @Output() emitBack = new EventEmitter<() => void>();

	private readonly items$ = new BehaviorSubject<T[] | undefined>(undefined);
	private readonly currentIndex$ = new BehaviorSubject<number>(0);

	constructor(private templateRef: TemplateRef<ICarouselDirective<T>>, private viewContainerRef: ViewContainerRef) {}

	ngOnInit() {
		this.listenCurrentIndexChange();
		// this.emitBack.emit(this.back.bind(this));
		// this.emitNext.emit(() => {
		//   this.next();
		// });
	}

	private listenCurrentIndexChange() {
		// combineLatest([
		//   this.currentIndex$,
		//   this.items$.pipe(filter(Boolean))
		// ]).pipe(
		//   map(([index, items]) => this.getCurrentContext(index, items)),
		// )
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

	private getCurrentContext(index: number, items: T[]): ICarouselDirective<T> {
		return {
			index,
			$implicit: items[index],
			next: () => {
				this.next();
			},
			back: this.back.bind(this),
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
}
