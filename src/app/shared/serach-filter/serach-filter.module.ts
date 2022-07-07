import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerachFilterPipe } from './serach-filter.pipe';

@NgModule({
	declarations: [SerachFilterPipe],
	imports: [CommonModule],
	exports: [SerachFilterPipe],
})
export class SerachFilterModule {}
