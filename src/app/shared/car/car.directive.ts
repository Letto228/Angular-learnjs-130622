import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

interface ICarDirective<T> {
	$implicit: T | T[];
	index: number;
	back: () => void;
	next: () => void;
  go: (index:number) => void | undefined;
	pages: IPage[];
}

interface IPage {
	num: number;
	active: boolean;
}

@Directive({
	selector: '[appCar]',
})
export class CarDirective<T> implements OnInit {
	@Input('appCarPartsCount') partsCount: number | undefined;
	@Input() set appCarOf(items: T[] | undefined) {
		if (items) {
			this.items = items;
		}
	}

	ngOnInit() {
		if (!this.items?.length) {
			this.viewContainerRef.clear();
			return;
		}
		this.fullItems = this.items;
		this.itemsLength = this.items.length;
		this.currentIndex = 0;
		if (this.partsCount) {
			const pagesCount = Math.ceil(this.itemsLength / this.partsCount);

			for (let i = 1; i <= pagesCount; i++) {
				this.pages.push({
					num: i,
					active: i - 1 == this.currentIndex,
				});
			}
		}
		this.insertTemplateWithCurrentIndex();
	}

	private items: T[] | undefined;
	private currentIndex: number = 0;
	private itemsLength: number = 0;
	private fullItems: T[] | undefined = undefined;
	private pages: IPage[] = [];
	private insertTemplateWithCurrentIndex() {
		if (this.fullItems && this.partsCount) {
			this.items = this.fullItems.slice(
				this.currentIndex * this.partsCount,
				this.currentIndex * this.partsCount + this.partsCount
			);
		}
		this.viewContainerRef.clear();
		if (this.pages.length) {
			this.pages.map((item) => {
				item.active = item.num - 1 == this.currentIndex;

				return item;
			});
		}
		this.viewContainerRef.createEmbeddedView(
			this.templateRef,
			this.getCurrentContext(this.currentIndex, this.items as T[], this.partsCount)
		);
	}

	private getCurrentContext(index: number, items: T[], partsCount: number | undefined): ICarDirective<T> {
		let implicit: T | T[] = items[index];

		if (partsCount && partsCount > 1) {
			implicit = items;
		}

		return {
			index: index,
			$implicit: implicit,
			back: () => {
				this.back();
			},
			next: () => {
				this.next();
			},
      go: (index: number) => {
        this.go(index);
      },
			pages: this.pages
		};
	}

	constructor(private templateRef: TemplateRef<ICarDirective<T>>, private viewContainerRef: ViewContainerRef) {}

	private next() {
		const nextIndex = this.currentIndex + 1;

		if (!this.itemsLength || nextIndex == this.pages.length) {
			return;
		}

		this.currentIndex = nextIndex;
		this.insertTemplateWithCurrentIndex();
	}

	private back() {
		const prevIndex = this.currentIndex - 1;

		if (!this.itemsLength || prevIndex == -1) {
			return;
		}

		this.currentIndex = prevIndex;
		this.insertTemplateWithCurrentIndex();
	}

	private go(index:number) {
      this.currentIndex = index-1;
      this.insertTemplateWithCurrentIndex();
  }
}
