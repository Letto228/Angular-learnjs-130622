const scrollThreshold = 150;

export function isScrollReachedTop(scrollTop: number, prevScrollTop: number): boolean {
	return scrollTop < scrollThreshold && scrollTop < prevScrollTop;
}

export function isScrollReachedBottom(scrollTop: number, lowerScrollPosition: number, prevScrollTop: number): boolean {
	console.log(lowerScrollPosition, scrollTop, prevScrollTop);
	return lowerScrollPosition - scrollTop < scrollThreshold && scrollTop > prevScrollTop;
}
