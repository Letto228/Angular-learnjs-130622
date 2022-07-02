import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
})
export class PopupHostComponent implements OnInit {
	@Input() hostTemplate: TemplateRef<unknown>;

	@ViewChild('viewPopupHost', { static: true, read: ViewContainerRef }) private popupHostElement: ViewContainerRef;

	constructor() {}

	ngOnInit(): void {
		this.insertTemplate(this.hostTemplate);
		console.log(this.hostTemplate);
	}

	private insertTemplate(template: TemplateRef<unknown>) {
		this.popupHostElement.clear();
		this.popupHostElement.createEmbeddedView(template);
	}
}
