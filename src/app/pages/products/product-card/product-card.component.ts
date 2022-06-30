import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() products: IProduct;
	@Output() orderClick = new EventEmitter<Event>();

	onOrder(event: Event): void {
		event.stopPropagation();
		this.orderClick.emit(event);
	}
}
