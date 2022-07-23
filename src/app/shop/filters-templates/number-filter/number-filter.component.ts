import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-filter',
  templateUrl: './number-filter.component.html',
  styleUrls: ['./number-filter.component.css']
})
export class NumberFilterComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
