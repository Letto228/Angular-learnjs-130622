import { createReducer, on } from '@ngrx/store';
import { IProductsState, productsAdapter, productsInitialState } from './products.state';
import { addProducts, updateProductsFilrer } from './products.actions';
import { IProduct } from '../../shared/products/product.interface';
import { Dictionary } from '@ngrx/entity';

export const productsReducer = createReducer(
	productsInitialState,
	// on(
	// 	addProducts,
	// 	(state: IProductsState, { products }): IProductsState => ({
	// 		...state,
	// ids: [
	// 	...state.ids, // Не эквивалентно адаптеру
	// 	...products.map(({_id}) => _id),
	// ],
	// 		entities: products.reduce(
	// 			(entities, product) => ({
	// 				...entities,
	// 				[product._id]: product
	// 			}),
	// 			{} as Dictionary<IProduct>,
	// 		)
	// 	})
	// ),
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
