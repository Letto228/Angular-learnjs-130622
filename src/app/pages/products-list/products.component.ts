import { Component } from '@angular/core';
import { productsMock } from '../../shared/products/products.mock';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
})
export class ProductsComponent {
	products = productsMock;

	onCardClick(event: Event) {
		console.log(event.currentTarget);
		(event.currentTarget as HTMLElement).style.backgroundColor = 'red';
		// alert('Клик по карточке товара');
	}
}
