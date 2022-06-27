import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product!: IProduct;

	@Output() buyProduct = new EventEmitter<void>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.buyProduct.emit();
	}
}
