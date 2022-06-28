import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
	@ViewChild(MatDrawer, { static: false }) private drawerComponent!: MatDrawer;
	value: string;

	// constructor() {}

	// ngOnChanges({}: SimpleChanges) {
	// 	// if (isDrawerOpen) {
	// 	// 	this.isDrawerOpen === isDrawerOpen.currentValue;
	// 	// }
	// }

	// ngOnInit() {
	// 	console.log(this.drawerComponent);
	// }

	// ngDoCheck() {}

	// ngAfterContentInit() {}

	// ngAfterContentChecked() {}

	// ngAfterViewInit() {
	// 	console.log(this.drawerComponent);
	// }

	// ngAfterViewChecked() {}

	// ngOnDestroy() {}

	toggleDrawer() {
		this.drawerComponent.toggle();
	}

	onChange(event: Event) {
		console.log(event);
	}
}
