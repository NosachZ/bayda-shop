import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { Category, Model } from 'src/app/_data-model/products';
import { Observable, switchMap, takeUntil, Subject, map, EMPTY } from 'rxjs';
import { ModelData } from '../../_category/category-data';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';




@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  modelData: ModelData = {model: null, categoryChain: []}; 

  destroy$: Subject<boolean> = new Subject();

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];


  constructor(
    private route: ActivatedRoute,
    private httpRequest: HttpRequestsService
  ) { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        // width: '600px',
        // height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
        thumbnailsArrows: true
      },
      // max-width 800
      // {
      //   breakpoint: 800,
      //   width: '100%',
      //   height: '600px',
      //   imagePercent: 80,
      //   thumbnailsPercent: 20,
      //   thumbnailsMargin: 20,
      //   thumbnailMargin: 20
      // },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.route.params
    .pipe(
      switchMap(params => this.getModel(params['modelName'])),
      switchMap(modelData => this.getCategoryChain(modelData)),
      takeUntil(this.destroy$)
    )
    .subscribe (modelData => {
      this.modelData = modelData;
      this.galleryImages = this.getImages(this.modelData.model?.images);
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

  getImages(imageArray: string[] | undefined) {
    console.log(imageArray);
    
    let imageGalleryData: NgxGalleryImage[] = [];
    if (!imageArray) return imageGalleryData;
    if (!imageArray.length) return imageGalleryData = [{
      small: 'assets/nophoto.svg',
      medium: 'assets/nophoto.svg',
      big: 'assets/nophoto.svg'
    }];
    for (let image of imageArray) {
      imageGalleryData.push({
        small: 'assets/backend-emul/models_photo/' + image,
      medium: 'assets/backend-emul/models_photo/' + image,
      big: 'assets/backend-emul/models_photo/' + image
      })
    }
    return imageGalleryData;
  }

}
