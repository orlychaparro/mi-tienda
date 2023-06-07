import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  // https://www.w3schools.com/howto/img_avatar.png

  onLoaded(img:string){
    console.log('log padre', img);
  }

}
