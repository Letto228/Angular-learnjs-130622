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
	product = productsMock[0];
	readonly title = 'Angular-learnjs';

	// onMenuClick() {
	// 	this.sidenav.toggleDrawer();
	// }

	ngOnInit(): void {
		console.log(this.product, 'app component');
	}

	onInputChange(event: Event) {
		console.log(event, 'event');
	}
}
