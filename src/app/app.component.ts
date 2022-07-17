import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'Angular-learnjs-130622';
	titleSecret = 'Angular-learnjs-130622-Secret';
  private iterator = 0;

	imgSrc = [
    'https://img.freepik.com/free-photo/closeup-beautiful-green-leaves_23-2148245094.jpg?w=1380',
    'https://img.freepik.com/free-photo/top-view-small-sour-blue-black-sloe-bucket-with-leaves-grey-background-with-copy-space-jpg_141793-20509.jpg?w=1380',
    'https://img.freepik.com/free-photo/top-view-kumquat-oat-flakes-with-copy-space-yellow-jpg_140725-12394.jpg?w=1380'
  ]
  constructor() {
    this.startChanging();
  }
  getImg() {
    return this.imgSrc[this.iterator];
  }
  startChanging() {
    setInterval(() => {
      this.iterator = this.iterator === this.imgSrc.length - 1 ? 0 : this.iterator + 1;
    }, 2000);
  }

}
