import { createReducer, on } from '@ngrx/store';
import { IProductsState, productsInitialState } from './products.state';
import { addProducts } from './products.actions';

export const productsReducer = createReducer(
	productsInitialState,
	on(
		addProducts,
		(state: IProductsState, { products }): IProductsState => ({
			...state,
			data: products,
		})
	)
);
