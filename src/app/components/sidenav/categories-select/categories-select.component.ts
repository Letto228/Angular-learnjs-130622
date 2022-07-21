import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../../../shared/categories/category.interface';
import { ISubCategory } from '../../../shared/categories/sub-category.interface';

@Component({
	selector: 'app-categories-select',
	templateUrl: './categories-select.component.html',
	styleUrls: ['./categories-select.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSelectComponent {
	@Input() categories!: ICategory[] | null;
	@Output() selectSubCategory = new EventEmitter<ISubCategory>();
}
