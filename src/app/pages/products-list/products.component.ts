import { ChangeDetectionStrategy, Component } from '@angular/core';
import { productsMock } from '../../shared/products/products.mock';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
	products = productsMock;

	// isHovered = true;

	// constructor(
	// 	private changeDetectorRef: ChangeDetectorRef,
	// ) {}

	// ngOnInit() {
	// 	setTimeout(() => {
	// 		this.isHovered = false;
	// 		this.changeDetectorRef.markForCheck();
	// 	}, 3000)
	// }
}
