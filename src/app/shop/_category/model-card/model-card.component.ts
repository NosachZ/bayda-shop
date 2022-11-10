import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/app/_data-model/products';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent implements OnInit {
  @Input() model: Model = {} as Model; 

  availabilityTitle = "";
  previewSrc = ""
  

  constructor() { }

  ngOnInit(): void {
    this.availabilityTitle = this.model.availability ? "Є в наявності" : "Немає в наявності";
    // add implementation of downloading images from source (DB, directory or other)
    this.previewSrc = this.model.images.length ? this.model.images[0] : "assets/nophoto.svg";
  }

  onBuy() {
    
  }

  onFavorites() {
    
  }
}
