import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	@ViewChild('sidenav', { static: true }) sidenav!: SidenavComponent;
	@ViewChild('list', { static: true }) listTemplate!: TemplateRef<unknown>;

	readonly title = 'Angular-learnjs';

	onMenuClick() {
		this.sidenav.toggleDrawer();
	}
}
