import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	// providers: [
	// 	{
	// 		provide: OBJECT_NAME,
	// 		useValue: 'AppComponent',
	// 	},
	// ],
})
export class AppComponent {
	readonly title = 'Angular-learnjs';
}
