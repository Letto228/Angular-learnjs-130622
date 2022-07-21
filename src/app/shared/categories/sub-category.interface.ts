import { ICategory } from './category.interface';

export interface ISubCategory {
	_id: string;
	name: string;
	category: ICategory['_id'];
}
