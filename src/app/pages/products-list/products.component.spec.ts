import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsComponent } from './products.component';
import { ProductsModule } from './products.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IState } from '../../store/reducer';
import { productsSelector } from '../../store/products/products.selector';
import { productsMock } from '../../shared/products/products.mock';
import { MemoizedSelector } from '@ngrx/store';
import { IProduct } from '../../shared/products/product.interface';
import { loadProducts } from '../../store/products/products.actions';
import { BrandsService } from '../../shared/brands/brands.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductsComponent', () => {
	let component: ProductsComponent;
	let fixture: ComponentFixture<ProductsComponent>;
	let mockStore: MockStore<IState>;
	let dispatchSpy: jasmine.Spy;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsModule, RouterTestingModule, BrowserAnimationsModule],
			providers: [
				provideMockStore(),
				{
					provide: BrandsService,
					useValue: {
						brands$: of([]),
						loadBrands(_subCategoryName: string | null) {},
					},
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		mockStore = TestBed.inject(MockStore);

		mockStore.overrideSelector(productsSelector as MemoizedSelector<IState, IProduct[]>, productsMock);

		dispatchSpy = spyOn(mockStore, 'dispatch');

		fixture = TestBed.createComponent(ProductsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Загрузка продуктов', (done) => {
		expect(dispatchSpy).toHaveBeenCalledWith(loadProducts(null));

		component.products$.subscribe((value) => {
			expect(value).toEqual(productsMock);

			done();
		});
	});
});
