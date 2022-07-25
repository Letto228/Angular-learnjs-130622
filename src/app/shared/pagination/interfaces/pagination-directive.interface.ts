export interface IPaginationDirective<T> {
	$implicit: T;
	index: number;
	prev: () => void;
	next: () => void;
	activeIndex: () => void;
}
