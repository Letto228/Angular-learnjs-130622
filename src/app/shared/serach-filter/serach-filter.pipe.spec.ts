import { IProduct } from '../products/product.interface';
import { productsMock } from '../products/products.mock';
import { SerachFilterPipe } from './serach-filter.pipe';

describe('SerachFilterPipe', () => {
	it('Фильтрация по имени', () => {
		const pipe = new SerachFilterPipe<IProduct>();

		expect(pipe.transform(productsMock, productsMock[0].name, 'name')).toEqual([productsMock[0]]);
	});

	it('Фильтрация по id', () => {
		const pipe = new SerachFilterPipe<IProduct>();

		expect(pipe.transform(productsMock, productsMock[0]._id, '_id')).toEqual([productsMock[0]]);
	});

	it('Фильтрация по id', () => {
		const pipe = new SerachFilterPipe<IProduct>();

		expect(pipe.transform(productsMock, 'not-found-id', '_id')).toEqual([]);
	});
});
