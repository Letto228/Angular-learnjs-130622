import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterInputComponent } from './counter-input.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [CounterInputComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule],
	exports: [CounterInputComponent],
})
export class CounterInputModule {}
