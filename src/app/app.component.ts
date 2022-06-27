import { Component, OnInit } from '@angular/core';
import { productsMock } from './mocks/products.mock';
import { IProduct } from './shared/interfaces/product.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
	// @ViewChild('sidenav') sidenav!: SidenavComponent;
	products: IProduct[] = productsMock;

	readonly title = 'Angular-learnjs';

	// onMenuClick() {
	// 	this.sidenav.toggleDrawer();
	// }

	constructor() {}

	ngOnInit(): void {
		console.log(this.products, 'app component');
	}

	onOrderClick(event: Event) {
		console.log(event, 'Order completed');
	}
}
