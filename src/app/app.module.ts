import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { ProductsModule } from './pages/products-list/products.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './components/popup-host/popup-host.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HeaderModule,
		SidenavModule,
		BrowserAnimationsModule,
		ProductsModule,
		PopupHostModule,
		MatListModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
