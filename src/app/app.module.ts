import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './pages/header/header.module';
import { SidenavModule } from './pages/sidenav/sidenav.module';

@NgModule({
	declarations: [AppComponent], // let/const: Component, Directive, Pipe
	imports: [
		BrowserModule,
		HeaderModule,
    SidenavModule,
		// AppRoutingModule,
		BrowserAnimationsModule,
	],
	// exports: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
