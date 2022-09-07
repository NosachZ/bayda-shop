import { Component, OnInit} from '@angular/core';
import { LocaleService } from 'src/app/services/locale.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  
  language!: string;
  findString: string = '';
  cartTotalCounter: number = this.cart.getTotal();
  
  isAuthorised: boolean = false;

  constructor(
    private locale: LocaleService,
    private cart: CartService,
  ) { }

  ngOnInit(): void {
    this.language = this.locale.getLanguage();
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
    this.isAuthorised = !this.isAuthorised;
    alert("Cabinet is under construction!");
  }

  onCartClick() {
    alert("Cart is under construction!");
  }

}
