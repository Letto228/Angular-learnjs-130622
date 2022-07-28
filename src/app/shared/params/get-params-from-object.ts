import { HttpParams } from '@angular/common/http';

export function getParamsFromObject(source: Record<string, any>): HttpParams {
	if (!source) {
		return new HttpParams();
	}

	return Object.entries(source).reduce((params, [key, value]) => {
		if (value === null || value === undefined) {
			return params;
		}

		if (Array.isArray(value)) {
			return value.reduce((newParams: HttpParams, value) => newParams.append(key, value), params);
		}

		return params.set(key, value);
	}, new HttpParams());
}
