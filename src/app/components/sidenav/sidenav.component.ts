import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	EventEmitter,
	OnInit,
	Output,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	@Output() isShadowActive = new EventEmitter<boolean>();

	@ViewChild(MatDrawer, { static: true }) private drawerComponent!: MatDrawer;
	@ViewChild('drawerViewPort', { static: true, read: ViewContainerRef })
	private drawerViewPortElement!: ViewContainerRef;

	@ContentChild('list', { static: true }) private listTemplate!: TemplateRef<unknown>;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		this.insertList(this.listTemplate);

		setTimeout(() => {
			this.isShadowActive.emit(true);
		}, 2000);
	}

	toggleDrawer() {
		this.drawerComponent.toggle();
		this.changeDetectorRef.markForCheck();
	}

	private insertList(template: TemplateRef<unknown>) {
		this.drawerViewPortElement.clear();
		this.drawerViewPortElement.createEmbeddedView(template);

		// setTimeout(() => {
		//   this.drawerViewPortElement.clear();
		//   this.drawerViewPortElement.createEmbeddedView(template,
		//     {
		//       name: 'Egor',
		//       $implicit: 'Angular LearnJs',
		//       user: {
		//         age: '35',
		//       }
		//     });
		//
		//   this.changeDetectorRef.markForCheck();
		// }, 3000)
	}
}
