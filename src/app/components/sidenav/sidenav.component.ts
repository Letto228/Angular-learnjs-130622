import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../models/errorStateMatcher.model';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
	showFiller = false;
	productName = 'Apple';
	emailFormControl = new FormControl(this.productName, [Validators.required, Validators.email]);

	matcher = new MyErrorStateMatcher();
	constructor() {}
}
