import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IProductsFilter } from '../../pages/products-list/products-filter.interface';
import { IProduct } from '../../shared/products/product.interface';

export interface IProductsState extends EntityState<IProduct> {
	filter: IProductsFilter;
}

export const PRODUCTS_FEATURE = 'products';

export const productsAdapter = createEntityAdapter<IProduct>({
	selectId: ({ _id }: IProduct) => _id,
});

export const productsInitialState: IProductsState = productsAdapter.getInitialState({
	filter: {
		name: '',
		brands: [],
		priceRange: {
			min: 0,
			max: 40000,
		},
	},
});
