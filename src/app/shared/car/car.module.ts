import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDirective } from './car.directive';

@NgModule({
	declarations: [CarDirective],
	imports: [CommonModule],
	exports: [CarDirective],
})
export class CarModule {}
