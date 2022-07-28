import { createAction } from '@ngrx/store';
import { IProductsFilter } from '../../pages/products-list/products-filter.interface';
import { IProduct } from '../../shared/products/product.interface';

export enum ProductsActionTypes {
	LoadProducts = '[Products] Load products',
	LoadProduct = '[Products] Load product',
	AddProducts = '[Products] Add products',
	UpdateProductsFilter = '[Products] Update products filter',
}

export const addProducts = createAction(ProductsActionTypes.AddProducts, (products: IProduct[]) => ({ products }));

export const loadProducts = createAction(ProductsActionTypes.LoadProducts, (subCategoryId?: string | null) => ({
	subCategoryId,
}));

export const loadProduct = createAction(ProductsActionTypes.LoadProduct, (id: string) => ({ id }));

export const updateProductsFilrer = createAction(
	ProductsActionTypes.UpdateProductsFilter,
	(filter: IProductsFilter) => ({ filter })
);

// addProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...]}

// export AddProducts {
//  type: ProductsActionTypes.AddProducts
//
//  constructor(private readonly products) {}
// }
// new AddProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...]}
