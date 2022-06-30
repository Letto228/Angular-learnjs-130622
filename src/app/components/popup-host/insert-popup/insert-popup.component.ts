import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-insert-popup',
	templateUrl: './insert-popup.component.html',
	styleUrls: ['./insert-popup.component.less'],
})
// V1
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
// V2
// export class InsertPopupComponent implements OnChanges {
// 	@Input() template: TemplateRef<unknown> | undefined;

//   @ViewChild('viewPort', { static: true, read: ViewContainerRef }) viewPort!: ViewContainerRef;

//   ngOnChanges({ template }: SimpleChanges) {
// 	  if (!template) {
// 		  return;
// 	  }

// 	  if (template.previousValue) {
// 		  this.viewPort.clear();
// 	  }

// 	  if (template.currentValue) {
// 		  this.viewPort.createEmbeddedView(template.currentValue);
// 	  }
//   }
// }
