import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './components/popup-host/popup-host.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/reducer';
import { storeEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';

const devtoolsInstruments = [];

if (!environment.production) {
	devtoolsInstruments.push(StoreDevtoolsModule.instrument());
}

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
		StoreModule.forRoot(storeReducer),
		EffectsModule.forRoot(storeEffects),
		...devtoolsInstruments,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
