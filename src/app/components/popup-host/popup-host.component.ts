import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
	@Input() template: TemplateRef<unknown> | undefined;
}
