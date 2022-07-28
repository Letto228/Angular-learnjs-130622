import { createReducer, on } from '@ngrx/store';
import { IProductsState, productsAdapter, productsInitialState } from './products.state';
import { addProducts, updateProductsFilrer } from './products.actions';
import { IProduct } from '../../shared/products/product.interface';
import { Dictionary } from '@ngrx/entity';

export const productsReducer = createReducer(
	productsInitialState,
	on(
		addProducts,
		(state: IProductsState, { products }): IProductsState => productsAdapter.upsertMany(products, state)
	),
	on(
		updateProductsFilrer,
		(state: IProductsState, { filter }): IProductsState => ({
			...state,
			filter,
		})
	)
);
