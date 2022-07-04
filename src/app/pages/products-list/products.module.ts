import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ForModule } from '../../shared/for/for.module';
import { CarouselModule } from '../../shared/carousel/carousel.module';

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
	],
	exports: [ProductsComponent],
})
export class ProductsModule {}
