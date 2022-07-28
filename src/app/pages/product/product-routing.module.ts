import { NgModule } from '@angular/core';
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
				component: TypeComponent,
			},
			{
				path: 'description',
				component: DescriptionComponent,
			},
			{
				path: '',
				redirectTo: 'description',
				pathMatch: 'full',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
