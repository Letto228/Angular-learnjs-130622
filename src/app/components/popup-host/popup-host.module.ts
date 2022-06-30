import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupHostComponent } from './popup-host.component';
import { InsertPopupComponent } from './insert-popup/insert-popup.component';

@NgModule({
	declarations: [PopupHostComponent, InsertPopupComponent],
	imports: [CommonModule],
	exports: [PopupHostComponent],
})
export class PopupHostModule {}
