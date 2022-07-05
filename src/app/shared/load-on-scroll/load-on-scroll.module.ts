import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadOnScrollDirective } from "./load-on-scroll.directive";


@NgModule({
  declarations: [
    LoadOnScrollDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadOnScrollDirective
  ]
})
export class LoadOnScrollModule { }
