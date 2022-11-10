import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { Category, Model } from 'src/app/_data-model/products';
import { Observable, switchMap, takeUntil, Subject, map, EMPTY } from 'rxjs';
import { ModelData } from '../../_category/category-data';




@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  modelData: ModelData = {model: null, categoryChain: []}; 

  destroy$: Subject<boolean> = new Subject();
  img: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="

  constructor(
    private route: ActivatedRoute,
    private httpRequest: HttpRequestsService
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(params => this.getModel(params['modelName'])),
      switchMap(modelData => this.getCategoryChain(modelData)),
      takeUntil(this.destroy$)
    )
    .subscribe (modelData => this.modelData = modelData)
  }

  getModel(modelName: string) {
    return this.httpRequest.getModel(modelName)
        .pipe(map(model => {
          let modelData: ModelData = {} as ModelData;
          modelData.model = model
          return modelData;
        }))
  }

  getCategoryChain(modelData: ModelData) {
    console.log("getCategoryChain, modelData: ",modelData);
    let response: Observable<ModelData> = EMPTY;
    if (modelData.model /* && modelData.model.categories.length */) {
      response = this.httpRequest.getCategoryChain(modelData.model.categories[0].id)
      .pipe(map(chain => {
        modelData.categoryChain = chain;
        return modelData;
      }))
    }
    return response;
  }

}
