import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
	products: IProduct[] | undefined = undefined;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock.slice(0, 4);
			this.changeDetectorRef.markForCheck();
		}, 2000);
		setTimeout(() => {
			console.log(' ');
		}, 3000);
		setTimeout(() => {
			this.products = productsMock.map((item) => ({ ...item }));
			this.changeDetectorRef.markForCheck();
		}, 5000);
		setTimeout(() => {
			console.log(' ');
		}, 6000);
		setTimeout(() => {
			// this.products = productsMock.map(item => ({...item, name: item.name + '123'}));
			this.changeDetectorRef.markForCheck();
		}, 7000);
	}

	trackBy(_: number, item: IProduct) {
		return item._id;
		// return item.name;
		// return item;
	}
}
