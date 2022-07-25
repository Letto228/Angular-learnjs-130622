import { IProduct } from '../../shared/products/product.interface';

export interface IProductsState {
	data: IProduct[] | null;
}

export const PRODUCTS_FEATURE = 'products';

export const productsInitialState: IProductsState = {
	data: null,
};
