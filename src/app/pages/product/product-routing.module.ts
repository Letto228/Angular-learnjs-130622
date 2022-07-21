import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './type/type.component';
import { DescriptionComponent } from './description/description.component';
import { QuestionCanActivateGuard } from '../../shared/lesson-guads/question-can-activate.guard';

const routes: Routes = [
	{
		path: 'root/:id',
		component: DescriptionComponent,
	},
	{
		path: ':id/root',
		redirectTo: 'root/:id',
		pathMatch: 'full',
	},
	{
		path: ':id',
		component: ProductComponent,
		children: [
			{
				path: 'type',
				canActivate: [QuestionCanActivateGuard],
				// canDeactivate: [QuestionCanDiactivateGuard],
				component: TypeComponent,
			},
			{
				path: 'description',
				component: DescriptionComponent,
			},
			// {
			// 	path: '',
			// 	redirectTo: '/products-list',
			// 	pathMatch: 'full',
			// },
			{
				path: '',
				redirectTo: 'description',
				pathMatch: 'full',
			},
			// {
			//   path: 'root',
			//   redirectTo: '../../root/:id'
			// }
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
