import { Component, OnInit } from '@angular/core';

import { MenuItem, menuItemsSrc } from '../nav-menu';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  menuItems: MenuItem[] = menuItemsSrc;

  constructor() { }

  ngOnInit(): void {
  }

}
