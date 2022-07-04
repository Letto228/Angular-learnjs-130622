import { Component, OnInit } from '@angular/core';
import { productsMock } from './mocks/products.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	// @ViewChild('sidenav') sidenav!: SidenavComponent;
	readonly product = productsMock[0];
	readonly title = 'Angular-learnjs';

	// onMenuClick() {
	// 	this.sidenav.toggleDrawer();
	// }
}
