import { IProductImage } from './product-image.interface';

export interface IProduct {
	_id: string;
	name: string;
	description: string;
	price: number;
	images: IProductImage[];
	subCategory: string;
	feedbacksCount: number;
	rating: number;
}
