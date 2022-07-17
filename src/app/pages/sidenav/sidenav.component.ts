import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  inputValue = 'productName';

  constructor() { }

  ngOnInit(): void {
  }

}
