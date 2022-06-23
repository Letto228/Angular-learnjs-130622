import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [SidenavComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule],
	exports: [SidenavComponent],
})
export class SidenavModule {}
