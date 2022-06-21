import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
	constructor() {
		console.log('<HeaderComponent> ::: method "constructor" placeholder');
	}

	ngOnInit(): void {
		console.log('<HeaderComponent> ::: method "ngOnInit" placeholder');
	}
}
