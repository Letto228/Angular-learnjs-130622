import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input() product!: IProduct;

	@Output() buyProduct = new EventEmitter<void>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.buyProduct.emit();
	}
}
