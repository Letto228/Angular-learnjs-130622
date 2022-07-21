import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CategoriesSelectComponent } from './categories-select/categories-select.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
	declarations: [SidenavComponent, CategoriesSelectComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, MatListModule, MatExpansionModule],
	exports: [SidenavComponent],
})
export class SidenavModule {}
