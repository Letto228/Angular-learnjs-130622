import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'serachFilter',
})
export class SerachFilterPipe implements PipeTransform {
	transform(value: unknown, ...args: unknown[]): unknown {
		return null;
	}
}
