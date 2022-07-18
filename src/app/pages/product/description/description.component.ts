import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-description',
	templateUrl: './description.component.html',
	styleUrls: ['./description.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {}
