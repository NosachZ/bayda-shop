import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { Category, Model } from 'src/app/_data-model/products';
import { Observable, switchMap, takeUntil, Subject, map, EMPTY } from 'rxjs';
import { ModelData } from '../../shop-interfaces';
import { GalleryItem, ImageItem } from 'ng-gallery';





@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  modelData: ModelData = {model: null, categoryChain: []}; 
  galleryImages: GalleryItem[] = [];
  availabilityTitle = "";

  destroy$: Subject<boolean> = new Subject();

  



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
    .subscribe (modelData => {
      this.modelData = modelData;
      if (this.modelData.model) {
        this.availabilityTitle = this.modelData.model.availability ? "Є в наявності" : "Немає в наявності";
        this.galleryImages = this.getGalleryImages(this.modelData.model.images);
      }
    })
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
    // console.log("getCategoryChain, modelData: ",modelData);
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

  getGalleryImages(imageArray: string[] | undefined) {    
    let imageGalleryData: GalleryItem[] = [];
    if (!imageArray) return imageGalleryData;
    if (!imageArray.length) return imageGalleryData = [
      new ImageItem({src: 'assets/nophoto.svg', thumb: 'assets/nophoto.svg'})
    ];
    for (let image of imageArray) {
      imageGalleryData.push(new ImageItem({
        src: 'assets/backend-emul/models_photo/' + image, 
        thumb: 'assets/backend-emul/models_photo/' + image})
      )
    }
    return imageGalleryData;
  }

  onBuy() {
    
  }

  onFavorites() {
    
  }

}
