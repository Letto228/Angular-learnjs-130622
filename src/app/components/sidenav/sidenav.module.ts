import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsModule } from '../../pages/products/products.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

export const sideNavImports = [ProductsModule];

@NgModule({
	declarations: [SidenavComponent],
	imports: [
		CommonModule,
		MatSidenavModule,
		MatInputModule,
		MatIconModule,
		FormsModule,
		MatButtonModule,
		...sideNavImports,
	],
	exports: [SidenavComponent],
})
export class SidenavModule {}
