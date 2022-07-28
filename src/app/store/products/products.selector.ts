import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductsState, productsAdapter, PRODUCTS_FEATURE } from './products.state';

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);
// productsFeatureSelector = (state: IState) => state[PRODUCTS_FEATURE]

export const { selectAll: productsSelector, selectEntities } = productsAdapter.getSelectors(productsFeatureSelector);

// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     selectAll, // customSelectorData
// )
// productsSelector = (state: IState) => customSelectorData(productsFeatureSelector(state))

export const productSelector = (id: string) =>
	createSelector(
		selectEntities,
		(productsEntities) => productsEntities[id] // customSelectorProduct
	);
// (state: IState) => customSelectorProduct(productsSelector(state))

// createSelector(selector: (state) => any, customSelector: (state) => any): (state: IState) => any {
// return (state: IState) => customState(selector(state));
// }

export const productsFilterSelector = createSelector(productsFeatureSelector, ({ filter }) => filter);

export const productsFilterSearchNameSelector = createSelector(productsFilterSelector, ({ name }) => name);
