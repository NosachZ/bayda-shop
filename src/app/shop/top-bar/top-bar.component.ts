import { Component, OnInit} from '@angular/core';
import { LocaleService } from 'src/app/locale.service';
import { CartService } from 'src/app/cart.service';
import { faMagnifyingGlass, faUserLock, faUserGear, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CatalogService } from 'src/app/catalog.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  
  language!: string;
  findString: string = '';
  cartTotalCounter: number = this.cart.getTotal();
  
  faMagnifyingGlass = faMagnifyingGlass;
  faUserLock = faUserLock;
  faUserGear = faUserGear;
  cabinetIcon = faUserLock;
  faCartShopping = faCartShopping;

  constructor(
    private locale: LocaleService,
    private cart: CartService,
    private catalog: CatalogService
  ) { }

  ngOnInit(): void {
    this.language = this.locale.getLanguage();
  }

  logoClick() {
    this.catalog.catalogInit();
  }

  selectLanguage(lang: string) {
    this.locale.setLanguage(lang);
    this.language = lang;
    alert(lang);
  }

  onFind() {
    alert(this.findString);
  }

  onCabinetClick() {
    this.cabinetIcon = (this.cabinetIcon == this.faUserLock) ? this.faUserGear : this.faUserLock;
    alert("Cabinet is under construction!");
  }

  onCartClick() {
    alert("Cart is under construction!");
  }

}
