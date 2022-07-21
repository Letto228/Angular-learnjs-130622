import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable, timer } from 'rxjs';

export function isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
	return timer(3000).pipe(map(() => (Number(control?.value) ? { isString: 'Input text' } : null)));
}
