import {
	AfterViewInit,
	Component,
	ContentChild,
	ContentChildren,
	ElementRef,
	Input,
	OnInit,
	QueryList,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
	// @Input() listTemplate!: TemplateRef<unknown>;

	@ViewChild(MatDrawer, { static: true }) private drawerComponent!: MatDrawer;
	@ViewChild('drawerViewPort', { static: true, read: ViewContainerRef })
	private drawerViewPortElement!: ViewContainerRef;

	@ContentChild('list', { static: true }) private listTemplate!: TemplateRef<unknown>;

	@ContentChildren('listItem', { descendants: true, read: ElementRef }) private listItem:
		| QueryList<MatListItem>
		| undefined;

	ngOnInit() {
		this.insertList(this.listTemplate);
	}

	ngAfterViewInit() {
		console.log(this.listItem);
	}

	toggleDrawer() {
		this.drawerComponent.toggle();
	}

	private insertList(template: TemplateRef<unknown>) {
		this.drawerViewPortElement.clear();
		this.drawerViewPortElement.createEmbeddedView(template);
	}
}
