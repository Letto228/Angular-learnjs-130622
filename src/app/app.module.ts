import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { GoodsCardComponent } from './components/goods-card/goods-card.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import {productsMock} from "./mocks/products.mock";

@NgModule({
	declarations: [AppComponent, GoodsCardComponent], // let/const: Component, Directive, Pipe
	imports: [
		BrowserModule,
		HeaderModule,
		// AppRoutingModule,
		SidenavModule,
		BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
	],
	// exports: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
