import { ISubCategory } from './sub-category.interface';

export interface ICategory {
	_id: string;
	name: string;
	subCategories: ISubCategory[];
}
