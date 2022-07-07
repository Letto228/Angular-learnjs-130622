import { IProduct } from './product.interface';

export interface IProductsDto {
	data: {
		items: IProduct[];
		quantity: number;
	};
}
