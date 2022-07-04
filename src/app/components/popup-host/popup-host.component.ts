import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent implements OnInit, OnChanges {
	@Input() hostTemplate: TemplateRef<unknown>;

	@ViewChild('viewPopupHost', { static: true, read: ViewContainerRef }) private popupHostElement: ViewContainerRef;

	ngOnInit(): void {
		this.insertTemplate(this.hostTemplate);
	}

	ngOnChanges({ hostTemplate }: SimpleChanges) {
		if (!hostTemplate) {
			return;
		}

		if (hostTemplate.previousValue) {
			this.popupHostElement.clear();
		}

		if (hostTemplate.currentValue) {
			this.popupHostElement.createEmbeddedView(this.hostTemplate);
		}
	}

	private insertTemplate(template: TemplateRef<unknown>) {
		this.popupHostElement.clear();
		this.popupHostElement.createEmbeddedView(template);
	}
}
