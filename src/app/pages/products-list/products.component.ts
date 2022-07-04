import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { productsMock } from '../../shared/products/products.mock';
import { LoadDirection } from '../../shared/scroll-with-loading/enums';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
	readonly products = productsMock;
	isLoadingData = false;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	onLoadData(direction: LoadDirection) {
		console.log(direction);

		//сэмитируем в этом методе подгрузку данных
		this.isLoadingData = true;

		setTimeout(() => {
			this.isLoadingData = false;

			this.changeDetectorRef.markForCheck();
		}, 3000);
	}
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
