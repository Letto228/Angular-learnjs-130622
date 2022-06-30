import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassDirective } from './ng-class.directive';

@NgModule({
	declarations: [NgClassDirective],
	imports: [CommonModule],
	exports: [NgClassDirective],
})
export class NgClassModule {}
