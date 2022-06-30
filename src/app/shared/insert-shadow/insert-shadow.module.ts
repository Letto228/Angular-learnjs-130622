import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertShadowDirective } from './insert-shadow.directive';

@NgModule({
	declarations: [InsertShadowDirective],
	imports: [CommonModule],
	exports: [InsertShadowDirective],
})
export class InsertShadowModule {}
