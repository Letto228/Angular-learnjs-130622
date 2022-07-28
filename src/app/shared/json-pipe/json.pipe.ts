import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'json',
	pure: false,
})
export class JsonPipe<T> implements PipeTransform {
	transform(value: T): string {
		return JSON.stringify(value);
	}
}
