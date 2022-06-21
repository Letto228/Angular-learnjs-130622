import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit {
	showFiller = false;
	productName = 'Hello World!';

	constructor() {
		console.log('<SidenavComponent> ::: method "constructor" placeholder');
	}

	ngOnInit(): void {
		console.log('<SidenavComponent> ::: method "constructor" placeholder');
	}
}
