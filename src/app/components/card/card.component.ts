import { Component, Output, EventEmitter } from '@angular/core';
import { productsMock } from 'src/app/mocks/products.mock';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.less'],
})
export class CardComponent {
	item: IProduct = productsMock[0];

	@Output() buyBtnClick = new EventEmitter<Event>();
}
