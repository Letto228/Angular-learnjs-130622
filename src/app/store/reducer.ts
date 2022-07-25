import { productsReducer } from './products/products.reducer';
import { IProductsState, PRODUCTS_FEATURE } from './products/products.state';

export interface IState {
	[PRODUCTS_FEATURE]: IProductsState;
}

export const storeReducer = {
	[PRODUCTS_FEATURE]: productsReducer,
};
