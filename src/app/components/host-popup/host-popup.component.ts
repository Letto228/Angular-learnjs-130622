import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-host-popup',
  templateUrl: './host-popup.component.html',
  styleUrls: ['./host-popup.component.less']
})
export class HostPopupComponent implements OnInit {
  @Input() template!:TemplateRef<unknown>;
  @ViewChild('popupContainer',{static: true, read: ViewContainerRef}) private popupContainer!:ViewContainerRef;
  constructor() { }

  ngOnInit(): void {
    this.insertPopupTemplate(this.template);
  }
  insertPopupTemplate(template: TemplateRef<unknown>){
    this.popupContainer.clear();
    this.popupContainer.createEmbeddedView(this.template);
  }
}
