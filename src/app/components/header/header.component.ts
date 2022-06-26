import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
	@Input() title = 'Shop';

	@Output() menuClick = new EventEmitter<Event>();
}
