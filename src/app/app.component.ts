import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	// @ViewChild('sidenav') sidenav!: SidenavComponent;

	readonly title = 'Angular-learnjs';

	log(event: Event) {
		console.log(event);
	}

	// onMenuClick() {
	// 	this.sidenav.toggleDrawer();
	// }
}
