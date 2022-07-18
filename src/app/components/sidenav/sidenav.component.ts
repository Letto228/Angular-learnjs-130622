import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	EventEmitter,
	Inject,
	OnInit,
	Output,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { OBJECT_NAME } from '../../shared/object-name/object-name.token';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: OBJECT_NAME,
			useFactory: () => {
				return 'SidenavComponent';
			},
		},
	],
})
export class SidenavComponent implements OnInit {
	@Output() isShadowActive = new EventEmitter<boolean>();

	@ViewChild(MatDrawer, { static: true }) private drawerComponent!: MatDrawer;
	@ViewChild('drawerViewPort', { static: true, read: ViewContainerRef })
	private drawerViewPortElement!: ViewContainerRef;

	@ContentChild('list', { static: true }) private listTemplate!: TemplateRef<unknown>;

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
		@Inject(OBJECT_NAME) private readonly objectName: string
	) {}

	ngOnInit() {
		console.log(this.objectName);

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
	}
}
