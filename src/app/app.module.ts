import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './pages/header/header.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
	declarations: [AppComponent, SidenavComponent], // let/const: Component, Directive, Pipe
	imports: [
		BrowserModule,
		HeaderModule,
		// AppRoutingModule,
		BrowserAnimationsModule,
    MatSidenavModule
	],
	// exports: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
