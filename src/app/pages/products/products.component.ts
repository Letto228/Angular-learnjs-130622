import { Component } from '@angular/core';
import { productsMock } from '../../mocks/products.mock';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
})
export class ProductsComponent {
	product = productsMock[0];

	onOrderClick(event: Event) {
		console.log(event, 'Order completed');
	}
}
