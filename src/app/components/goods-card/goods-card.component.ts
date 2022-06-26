import {Component, OnInit,EventEmitter, Output} from '@angular/core';
import {productsMock} from "../../mocks/products.mock";

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.less']
})
export class GoodsCardComponent implements OnInit {
  @Output() buyButtonClick = new EventEmitter<Event>();
  //header
  header = productsMock[0]['name'];
  images = productsMock[0]['images'];
  description = '9.6" Планшет Dexp Ursus S290 32 ГБ 3G – устройство со сбалансированными характеристиками. Он адаптирован для различных задач – веб-серфинг, запуск многочисленных приложений, просмотр мультимедийного контента, обучение, работа и т. д.\n' +
    'Планшет Dexp Ursus S290 32 ГБ 3G выпускается в черном цвете. Он обладает лаконичным дизайном, а корпус выполнен из прочного пластика. В данную модель установлен дисплей с диагональю 9.6 дюйма. Разрешение экрана – 1280x800 пикселей, картинка хорошего качества, работать с планшетом действительно комфортно.';
  descriptionLength = 300;

  ngOnInit(): void {
    if(this.description.length > this.descriptionLength) {
      this.description = this.description.slice(0,this.descriptionLength) + ' ...';
    }
  }
}
