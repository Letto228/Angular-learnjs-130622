import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { ProductsModule } from './pages/products-list/products.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './components/popup-host/popup-host.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsApiService } from './shared/products/products-api.service';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';
import { OBJECT_NAME } from './shared/object-name/object-name.token';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	declarations: [AppComponent, NotFoundComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HeaderModule,
		SidenavModule,
		BrowserAnimationsModule,
		PopupHostModule,
		MatListModule,
		InsertShadowModule,
		HttpClientModule,
	],
	providers: [
		{
			provide: ProductsApiService,
			useClass: ProductsApiService,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
