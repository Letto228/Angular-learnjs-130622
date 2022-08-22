import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { productsMock } from '../../shared/products/products.mock';
import { IProduct } from '../../shared/products/product.interface';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
	products: IProduct[] | undefined = undefined;

	items = [2, 34, 5, 6, 7, 3, 3, 5, 4];
	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		// setTimeout(() => {
		//   this.products = productsMock.slice(0, 4);
		//   this.changeDetectorRef.markForCheck();
		// }, 2000)
		//
		// setTimeout(() => {
		//   console.log(' ')
		// }, 3000)

		console.log(this.items.slice(2, 4), 'slice');
		setTimeout(() => {
			this.products = productsMock.map((item) => ({ ...item }));
			this.changeDetectorRef.markForCheck();
		}, 2000);
		//
		// setTimeout(() => {
		//   console.log(' ')
		// }, 6000)

		setTimeout(() => {
			// this.products = productsMock.map(item => ({...item, name: item.name + '1245'}));
			// this.products?.forEach((_, index: number) => {
			//   if (this.products) {
			//     this.products[index].name = '1345';
			//   }
			// })
			this.changeDetectorRef.markForCheck();
		}, 3000);
	}

	trackBy(_: number, item: IProduct) {
		return item._id;
		// return item.name;
		// return item;
	}
}
