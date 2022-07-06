import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollLoadDirective } from './scroll-load.directive';

@NgModule({
	declarations: [ScrollLoadDirective],
	imports: [CommonModule],
	exports: [ScrollLoadDirective],
})
export class ScrollLoadModule {}
