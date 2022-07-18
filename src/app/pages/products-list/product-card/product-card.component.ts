import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { OBJECT_NAME } from '../../../shared/object-name/object-name.token';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	// providers: [
	// 	{
	// 		provide: OBJECT_NAME,
	// 		useFactory: () => {
	// 			console.log('ProductCardComponent INIT');
	// 			return 'ProductCardComponent'
	// 		},
	// 	}
	// ]
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;

	@Output() buyProduct = new EventEmitter<void>();

	get imgSrc(): string {
		return this.product?.images[0].url || '';
	}

	// constructor(
	// 	@Inject(OBJECT_NAME) private readonly objectName: string,
	// ) {}

	// ngOnInit() {
	// 	console.log(this.objectName);
	// }

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.buyProduct.emit();
	}
}
