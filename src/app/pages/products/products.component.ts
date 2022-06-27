import { Component, OnInit } from '@angular/core';
import { productsMock } from '../../mocks/products.mock';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
	product = productsMock[0];

	constructor() {}

	ngOnInit(): void {
		console.log(this.product, 'app component');
	}

	onOrderClick(event: Event) {
		console.log(event, 'Order completed');
	}
}
