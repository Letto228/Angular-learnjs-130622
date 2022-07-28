import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductsState, productsAdapter, PRODUCTS_FEATURE } from './products.state';

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);

export const { selectAll: productsSelector, selectEntities } = productsAdapter.getSelectors(productsFeatureSelector);

export const productSelector = (id: string) =>
	createSelector(selectEntities, (productsEntities) => productsEntities[id]);

export const productsFilterSelector = createSelector(productsFeatureSelector, ({ filter }) => filter);

export const productsFilterSearchNameSelector = createSelector(productsFilterSelector, ({ name }) => name);
