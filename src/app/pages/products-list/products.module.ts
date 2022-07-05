import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgClassModule } from '../../shared/ng-class/ng-class.module';
import { ScrollWithLoadingModule } from 'src/app/shared/scroll-with-loading/scroll-with-loading.module';
import {LoadOnScrollModule} from "../../shared/load-on-scroll/load-on-scroll.module";

@NgModule({
	declarations: [ProductsComponent, ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, NgClassModule, ScrollWithLoadingModule, LoadOnScrollModule],
	exports: [ProductsComponent],
})
export class ProductsModule {}
