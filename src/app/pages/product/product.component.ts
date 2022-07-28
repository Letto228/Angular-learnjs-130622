import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, switchMap, tap } from 'rxjs';
import { loadProduct } from '../../store/products/products.actions';
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
			this.store.dispatch(loadProduct(id));
		}),
		switchMap((id) => this.store.pipe(select(productSelector(id))))
	);

	constructor(private readonly activatedRoute: ActivatedRoute, private readonly store: Store<IState>) {}
}
