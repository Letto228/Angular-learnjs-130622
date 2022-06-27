import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnInit, OnChanges {
	@Input() products: IProduct;
	@Output() orderClick = new EventEmitter<Event>();

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
