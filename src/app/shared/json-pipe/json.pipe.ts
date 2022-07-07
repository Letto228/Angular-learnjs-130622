import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'json',
	pure: false,
})
export class JsonPipe<T> implements PipeTransform {
	transform(value: T): string {
		console.log('getJsonProduct');

		return JSON.stringify(value);
	}
}
