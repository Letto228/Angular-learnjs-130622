import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgClassModule } from '../../shared/ng-class/ng-class.module';
import { ScrollLoadModule } from '../../shared/scroll-load/scroll-load.module';

@NgModule({
	declarations: [ProductsComponent, ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, NgClassModule, ScrollLoadModule],
	exports: [ProductsComponent],
})
export class ProductsModule {}
