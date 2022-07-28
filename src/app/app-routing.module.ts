import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomPreloading } from './custom-preloading/custom-preloading';

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
		data: {
			preload: true,
		},
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
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: CustomPreloading,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
