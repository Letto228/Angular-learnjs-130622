import { ChangeDetectionStrategy, Component, Host, Inject, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { OBJECT_NAME } from '../../shared/object-name/object-name.token';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

// NullInjector

// ^
// |

// PlatformInjector

// ^
// |

// RootInjector (AppModuleInjector)

// ^
// |

// AppElementInjector

// ^
// |

// ...

// ^
// |

// SidenavElementInjector

// ^
// |

// ProductsElementInjector

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	// providers: [
	// 	{
	// 		provide: OBJECT_NAME,
	// 		useFactory: () => {
	// 			console.log('ProductsComponent INIT');
	// 			return 'ProductsComponent';
	// 		},
	// 	},
	// ],
})
export class ProductsComponent implements OnInit {
	readonly products$ = this.productsStoreService.products$;

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly router: Router // @Inject(OBJECT_NAME) @Optional() @Host() private readonly objectName: string,
	) // @Inject(OBJECT_NAME) @SkipSelf() private readonly parentObjectName: string
	{}

	ngOnInit() {
		// console.log(this.objectName, this.parentObjectName);
		this.productsStoreService.loadProducts();
	}

	trackBy(_: number, item: IProduct) {
		return item._id;
	}

	// navigateToProduct(id: string) {
	// this.router.navigate(['/product', id]);
	// this.router.navigateByUrl(`/product/${id}`);
	// }
}
