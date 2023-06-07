import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  img_notfound= './assets/images/img_notfound.jpg'

  constructor() {}

  ngOnInit(): void {

  }

  imgError() {
    this.img = this.img_notfound;
  }

  imgLoaded(){
    console.log('Log hijo ')
    this.loaded.emit(this.img);
  }

}
