import { Component } from '@angular/core';
import {Product} from './models/product.model';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';   // https://www.w3schools.com/howto/img_avatar.png
  showImg = true;



  onLoaded(img:string){
    console.log('log padre', img);
  }

  toggleImg(){
    this.showImg = !this.showImg;

  }

}
