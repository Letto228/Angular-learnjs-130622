import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { CategoriesStoreService } from '../../shared/categories/categories-store.service';
import { ISubCategory } from '../../shared/categories/sub-category.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	@Output() isShadowActive = new EventEmitter<boolean>();

	readonly categories$ = this.categoriesStoreService.categories$;

	@ViewChild(MatDrawer, { static: true }) private drawerComponent!: MatDrawer;

	constructor(
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly categoriesStoreService: CategoriesStoreService,
		private readonly router: Router
	) {}

	ngOnInit() {
		this.categoriesStoreService.loadCategories();
	}

	onSubCategorySelect(subCategory: ISubCategory) {
		this.router.navigate(['/products-list', subCategory._id]);
	}

	toggleDrawer() {
		this.drawerComponent.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
