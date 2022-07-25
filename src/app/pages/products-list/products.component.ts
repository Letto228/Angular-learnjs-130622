import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { productsMock } from '../../shared/products/products.mock';
import { Direction } from '../../shared/scroll-load/direction.enum';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
	readonly products = productsMock;
	isLoadingData = false;
	// isHovered = true;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	onScrollLoad(direction: Direction) {
		console.log(direction);
		this.isLoadingData = true;
	}
}
