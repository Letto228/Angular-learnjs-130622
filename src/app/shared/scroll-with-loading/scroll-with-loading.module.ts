import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollWithLoadingDirective } from './scroll-with-loading.directive';

@NgModule({
	declarations: [ScrollWithLoadingDirective],
	imports: [CommonModule],
	exports: [ScrollWithLoadingDirective],
})
export class ScrollWithLoadingModule {}
