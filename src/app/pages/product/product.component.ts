import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
	readonly product$ = this.activatedRoute.paramMap.pipe(
		map((paramMap) => paramMap.get('id')),
		filter(Boolean),
		tap((id) => {
			this.productsStoreService.loadProduct(id);
		}),
		switchMap((id) => this.productsStoreService.getProduct(id)),
		tap(console.log)
	);

	constructor(
		private readonly activatedRoute: ActivatedRoute,
		private readonly router: Router,
		private readonly productsStoreService: ProductsStoreService
	) {}

	ngOnInit(): void {
		console.log('id', this.activatedRoute.snapshot.params['id']);
		// setTimeout(() => {
		//   this.router.navigate(['/product', 'kommutator-tp-link-t1600g-52ts']);
		// }, 3000)
	}

	// navigateTo(segment: string) {
	//   this.router.navigate([segment], {relativeTo: this.activatedRoute});
	//   // this.router.navigateByUrl(segment);
	// }
}
