import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsStringDirective } from './is-string.directive';
import { IsStringAsyncDirective } from './is-string-async.directive';

@NgModule({
	declarations: [IsStringDirective, IsStringAsyncDirective],
	imports: [CommonModule],
	exports: [IsStringDirective, IsStringAsyncDirective],
})
export class ValidatorsDirectivesModule {}
