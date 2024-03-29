import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ForModule } from '../../shared/for/for.module';
import { CarouselModule } from '../../shared/carousel/carousel.module';
import { SerachFilterModule } from '../../shared/serach-filter/serach-filter.module';
import { ProductsRoutingModuleModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorsDirectivesModule } from '../../shared/validators/directives/validators-directives/validators-directives.module';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CounterInputModule } from '../../shared/counter-input/counter-input.module';

@NgModule({
	declarations: [ProductsComponent, ProductCardComponent, ProductsFilterComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule,
		ForModule,
		CarouselModule,
		MatInputModule,
		SerachFilterModule,
		ProductsRoutingModuleModule,
		FormsModule,
		ReactiveFormsModule,
		ValidatorsDirectivesModule,
		MatCheckboxModule,
		CounterInputModule,
	],
	exports: [ProductsComponent],
})
export class ProductsModule {}
