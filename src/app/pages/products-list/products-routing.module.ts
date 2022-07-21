import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
	{
		path: '',
		// resolve: {
		// 	products: LoadProductsResolver,
		// },
		component: ProductsComponent,
	},
	{
		path: ':subCategoryId',
		component: ProductsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsRoutingModuleModule {}
