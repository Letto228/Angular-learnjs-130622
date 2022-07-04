import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
	@Input() product: IProduct | undefined;

	@Output() buyProduct = new EventEmitter<void>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.buyProduct.emit();
	}

	get imgSrc(): string {
		return this.product?.images[0].url || '';
	}

	ngOnInit() {
		console.log('ProductCardComponent created!');
	}
}
