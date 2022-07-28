import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsApiService } from '../../shared/products/products-api.service';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { addProducts, loadProduct } from '../../store/products/products.actions';
import { productSelector } from '../../store/products/products.selector';
import { IState } from '../../store/reducer';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	readonly product$ = this.activatedRoute.paramMap.pipe(
		map((paramMap) => paramMap.get('id')),
		filter(Boolean),
		tap((id) => {
			// this.productsStoreService.loadProduct(id);
			// this.productsApiService.getProduct$(id).subscribe(product => {
			// 	this.store.dispatch(addProducts([product as IProduct]));
			// })
			this.store.dispatch(loadProduct(id));
		}),
		switchMap((id) => this.store.pipe(select(productSelector(id))))
	);

	constructor(
		private readonly activatedRoute: ActivatedRoute,
		private readonly router: Router,
		private readonly productsApiService: ProductsApiService,
		private readonly store: Store<IState>
	) {}

	// ngOnInit() {
	// setTimeout(() => {
	//   this.router.navigate(['/product', 'kommutator-tp-link-t1600g-52ts']);
	// }, 3000)
	// }

	// navigateTo(segment: string) {
	//   this.router.navigate([segment], {relativeTo: this.activatedRoute});
	//   // this.router.navigateByUrl(segment);
	// }
}
