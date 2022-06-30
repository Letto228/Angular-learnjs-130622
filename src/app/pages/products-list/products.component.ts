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
}
