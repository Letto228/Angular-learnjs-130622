import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { OBJECT_NAME } from '../../shared/object-name/object-name.token';
import { CarouselModule } from '../../shared/carousel/carousel.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { DescriptionComponent } from './description/description.component';
import { TypeComponent } from './type/type.component';

@NgModule({
	declarations: [ProductComponent, DescriptionComponent, TypeComponent],
	imports: [
		CommonModule,
		ProductRoutingModule,
		CarouselModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatTabsModule,
	],
	providers: [
		{
			provide: OBJECT_NAME,
			useValue: 'AppModule',
		},
	],
})
export class ProductModule {}
