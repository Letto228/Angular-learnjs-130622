export interface IPaginationDirective<T> {
	$implicit: T | T[];
	index: number;
	prev: () => void;
	next: () => void;
	allIndexes: number[];
	selectIndex: (index: number) => void;
}
