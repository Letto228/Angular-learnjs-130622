import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProductsModule } from '../../pages/products/products.module';

export const sideNavImports = [ProductsModule];

@NgModule({
	declarations: [SidenavComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, ...sideNavImports],
	exports: [SidenavComponent],
})
export class SidenavModule {}
