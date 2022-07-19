import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  selectedCategory!: string;

  constructor(private catalog: CatalogService) { }

  ngOnInit(): void {
    this.selectedCategory = this.catalog.selectedCategory;
  }

  

}
