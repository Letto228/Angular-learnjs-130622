import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	readonly title = 'Angular-learnjs-130622';
	readonly titleSecret = 'Angular-learnjs-130622-Secret';
	readonly imges = [
		'https://get.wallhere.com/photo/landscape-sea-reflection-bridge-suspension-bridge-1680x1050-px-nonbuilding-structure-cable-stayed-bridge-truss-bridge-706446.jpg',
		'https://w-dog.ru/wallpapers/2/13/539282408816904/skazochnoe-foto-biryuzovogo-ozera-s-gorami-i-lesom.jpg',
		'https://masyamba.ru/картинки-ниссан/43-картинки-машины-ниссан.jpg',
	];

	private activeImgIndex = 0;

	get activeImgUrl(): string {
		return this.imges[this.activeImgIndex];
	}
	get activeBackgroundImgUrl(): string {
		return `url(${this.imges[this.activeImgIndex]})`;
	}

	constructor() {
		this.startImgCarusel();
	}

	startImgCarusel() {
		setInterval(() => {
			this.activeImgIndex = this.activeImgIndex !== this.imges.length - 1 ? this.activeImgIndex + 1 : 0;
		}, 10000);
	}
}
