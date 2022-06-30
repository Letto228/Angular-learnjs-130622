import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-insert-popup',
	templateUrl: './insert-popup.component.html',
	styleUrls: ['./insert-popup.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsertPopupComponent {
	@Input()
	set template(template: TemplateRef<unknown> | undefined) {
		this.viewPort.clear();

		if (!template) {
			return;
		}

		this.viewPort.createEmbeddedView(template);
	}

	@ViewChild('viewPort', { static: true, read: ViewContainerRef })
	viewPort!: ViewContainerRef;
}
