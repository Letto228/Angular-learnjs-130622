import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../shared/interfaces/product.interface';
import { IProductImage } from '../../shared/interfaces/product-image.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit, OnChanges {
	@Input() products: IProduct[];
	@Output() orderClick = new EventEmitter<Event>();

	testImgUrl =
		'https://c.dns-shop.ru/thumb/st1/fit/0/0/dff090e667cd39dd397678905df52de5/6c3e7aab802deb19513c7cf55dd7c527efb9127d8aba2ed90f3d224577137fe2.jpg';

	constructor() {}

	ngOnInit(): void {
		console.log(this.products, 'product card comp');
	}

	ngOnChanges(changes: SimpleChanges) {
		this.products = changes['products'].currentValue;
	}

	onOrder(event: Event): void {
		console.log('Buy');
		this.orderClick.emit(event);
	}
}
