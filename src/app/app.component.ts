import { Component } from '@angular/core';
import {productsMock} from "./mocks/products.mock";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	// @ViewChild('sidenav') sidenav!: SidenavComponent;

	readonly title = 'Angular-learnjs';
  productData = productsMock;
	// onMenuClick() {
	// 	this.sidenav.toggleDrawer();
	// }

  light(elem: HTMLElement) {
    elem.classList.add('backlight');
    setTimeout(()=>{
      elem.classList.remove('backlight');
    },1000);
  }

  onCardClick(event:Event){
    let elem = (event.currentTarget as HTMLElement).children[0] as HTMLElement;
    this.light(elem);
    console.log('Клик по карточке товара');
  }

  onBuyButtonClick(event:Event) {
    let elem = (event.currentTarget as HTMLElement);
    this.light(elem);
    console.log('Клик по кнопке покупки');
  }
}
