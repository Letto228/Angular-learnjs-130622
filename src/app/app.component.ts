import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'Angular-learnjs-130622';

	currentImagePath: String;
	private _currentIndex = 0;
	private _imagePaths = [
		'https://w-dog.ru/wallpapers/9/16/520628925075361/afrika-yuzhnaya-afrika-namibiya-pejzazh-oblaka-zakat-pustynya.jpg',
		'https://storge.pic2.me/c/1360x800/786/5286db5fd4678.jpg',
		'https://karatu.ru/wp-content/uploads/2019/09/040919.jpg',
	];

	constructor() {
		this.currentImagePath = this._imagePaths[this._currentIndex];

		setInterval(() => {
			this._currentIndex++;

			if (this._currentIndex >= this._imagePaths.length) {
				this._currentIndex = 0;
			}

			this.currentImagePath = this._imagePaths[this._currentIndex];
		}, 2000);
	}
}
