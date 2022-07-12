import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

interface ICarDirective<T> {
	$implicit: T | T[];
	index: number;
	back: () => void;
	next: () => void;
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
		/*if(this.appCarOf) {
      this.items = this.appCarOf;
    }*/

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

	//private items: T[] | undefined = undefined;
	//private partsCount: number | undefined = undefined;
	private items: T[] | undefined;
	private currentIndex: number = 0;
	private itemsLength: number = 0;
	private fullItems: T[] | undefined = undefined;
	private nextDisable = false;
	private prevDisable = true;
	private pagesCount: number = 0;
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
		console.log(this.pages);

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
			pages: this.pages,
		};
	}

	constructor(private templateRef: TemplateRef<ICarDirective<T>>, private viewContainerRef: ViewContainerRef) {}

	private next() {
		const nextIndex = this.currentIndex + 1;

		if (!this.itemsLength) {
			return;
		}

		this.currentIndex = nextIndex < this.itemsLength ? nextIndex : 0;
		this.insertTemplateWithCurrentIndex();
	}

	private back() {
		const prevIndex = this.currentIndex - 1;

		if (!this.itemsLength) {
			return;
		}

		this.currentIndex = prevIndex >= 0 ? prevIndex : this.itemsLength - 1;
		this.insertTemplateWithCurrentIndex();
	}
}
