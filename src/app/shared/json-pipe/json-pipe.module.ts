import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPipe } from './json.pipe';

@NgModule({
	declarations: [JsonPipe],
	imports: [CommonModule],
	exports: [JsonPipe],
})
export class JsonPipeModule {}
