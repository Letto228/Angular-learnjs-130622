import {Component, Input, OnInit,EventEmitter, Output} from '@angular/core';
import {MatCard,MatCardHeader,MatCardTitle,MatCardImage,MatCardContent,MatCardActions} from '@angular/material/card';
import {MatButton} from "@angular/material/button";
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.less']
})

export class GoodsCardComponent {
  @Output() buyButtonClick = new EventEmitter<Event>();
  @Input() product!: IProduct;
  readonly descriptionLength = 300;

  prepareDescription(description: string){
    if (description.length > this.descriptionLength) {
      return description.slice(0,this.descriptionLength) + ' ...';
    }
    return description;
  }

  onBuyButtonClick(event: Event){
    event.stopPropagation();
    this.buyButtonClick.emit(event);
  }
}
