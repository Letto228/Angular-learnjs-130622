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
import { OBJECT_NAME } from '../../shared/object-name/object-name.token';

@NgModule({
	declarations: [ProductsComponent, ProductCardComponent],
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
	],
	exports: [ProductsComponent],
})
export class ProductsModule {}
