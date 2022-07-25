export interface IProductsFilter {
	name: string;
	brands: string[];
	priceRange: {
		min: number;
		max: number;
	};
}
