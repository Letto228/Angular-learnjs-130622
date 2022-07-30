export interface IPaginationDirective<T> {
	$implicit: T | T[];
	index: number;
	prev: () => void;
	next: () => void;
	activeIndex: (index: number) => void;
}
