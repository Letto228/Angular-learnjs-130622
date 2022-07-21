import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{
		path: 'products-list',
		loadChildren: () => import('./pages/products-list/products.module').then((m) => m.ProductsModule),
	},
	{
		path: 'product',
		// canActivate: [QuestionCanActivateGuard],
		// canLoad: [QuestionCanLoadGuard],
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
