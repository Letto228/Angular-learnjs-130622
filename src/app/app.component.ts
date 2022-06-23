import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
	title = 'Angular-learnjs-130622';
	titleSecret = 'Angular-learnjs-130622-Secret';
	imgSrc =
		'https://get.wallhere.com/photo/landscape-sea-reflection-bridge-suspension-bridge-1680x1050-px-nonbuilding-structure-cable-stayed-bridge-truss-bridge-706446.jpg';

	imageObj = [
		'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-169647.jpg&fm=jpg',
		'https://cdn.theculturetrip.com/wp-content/uploads/2021/05/gettyimages-1210789403.jpg',
		'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/City-of-Malaga.jpg',
		'https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-new-york-city.jpg',
	];

	constructor() {}

	ngOnInit(): void {
		// this.setInterval();
	}

	setInterval() {
		setInterval(() => {
			for (let i = 0; i <= this.imageObj.length; i++) {
				this.imgSrc += this.imageObj[i];
				console.log(i);
			}
		}, 3000);
	}
}
