import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products-list/products.component';
import { ProductsModule } from './pages/products-list/products.module';

const routes: Routes = [
	{
		path: 'products-list', // ...localhost:4200/products-list === ...localhost:4200/products-list/''
		// component: ProductsComponent,
		loadChildren: () => import('./pages/products-list/products.module').then((m) => m.ProductsModule),
	},
	{
		path: 'product', // ...localhost:4200/product === ...localhost:4200/product/''
		// component: ProductComponent,
		loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
	},
	{
		path: '',
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
