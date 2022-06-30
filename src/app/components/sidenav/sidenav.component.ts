import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
	@ViewChild(MatDrawer, { static: false }) private drawerComponent!: MatDrawer;
	@Input() inputValue: string;

	@Output() inputChange = new EventEmitter<string>();
	value: string = '';

	toggleDrawer() {
		this.drawerComponent.toggle();
	}

	onChange(event: Event) {
		console.log(event);
	}
}
