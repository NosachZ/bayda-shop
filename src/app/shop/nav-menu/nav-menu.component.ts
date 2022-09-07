import { Component, DoCheck, OnInit } from '@angular/core';

import { MenuItem, menuItemsSrc } from '../nav-menu';
import { LocaleService } from 'src/app/services/locale.service';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit, DoCheck {

  menuItems: MenuItem[] = menuItemsSrc;
  language!: string;

  constructor(private lang: LocaleService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.language = this.lang.language;
  }

}
