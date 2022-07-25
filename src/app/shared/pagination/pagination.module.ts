import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationDirective } from './pagination.directive';

@NgModule({
	declarations: [PaginationDirective],
	imports: [CommonModule],
	exports: [PaginationDirective],
})
export class PaginationModule {}
