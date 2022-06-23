import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'Angular-learnjs-130622';
	titleSecret = 'Angular-learnjs-130622-Secret';

	color = 'red';
	imgSrc = '../assets/img/1.jpg';
  imgBgSrc = this.imgSrc;

	images = [this.imgBgSrc,
    '../assets/img/2.jpg',
    '../assets/img/3.jpg',
    '../assets/img/4.jpg',
  ];

  constructor() {
    let counter = 0;
    setInterval(()=>{
      if(counter > this.images.length - 1) {
        counter = 0;
      }
      this.imgBgSrc = this.images[counter];
      counter++;
    },1000)
  }

}
