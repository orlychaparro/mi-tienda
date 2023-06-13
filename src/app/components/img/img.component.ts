import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy} from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  img_notfound= './assets/images/img_notfound.jpg'

   /*
   Ciclo :

Constructor: cuando se corre una instancia
ngOnChanges : corre antes y durante en el render, siemrpe que detecte cambios en el Input, está para eso, para detectar los cambios.
ngOnInit: corre antes pero tiene la condicione que solo correo una vez. Ahi se corren eventos asincronos.
ngAfcterViewInit: corre cuando los hijos de ese componentes se han renderizado.
NgOnDestroy: Corre cuando se elimina el componente.
   */


  constructor() {
    //before render - corre antes del render
    // No usar para asyncronas y se ejecuta solo una vez
    //En el constructor se debe hacer cosas que responde de forma inmediata y no asyncrona
    console.log('constructor', 'imgValue => ', this.img);

  }
  // Antes del render y durante el render
  // Sirve para actualizar cambios en los inputs - corre muchas veces las veces
  // que se actualize el valor del input.
  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges', 'imgValue =>', this.img);

  }

  ngOnInit(): void {
    // Corre antes del render
    // Se puede usar para metodos Asyn como fetch
    // Solo corre una vez, cuando se inicializa el componente
      console.log('ngOnInit', 'imgValue =>', this.img);


  }

  ngAfterViewInit(): void {
    // Corre despues del render de componente.
    // Este componente maneja los hijos.
    //Si el comopnente tiene hijos y quisiermos manear los eventos
    //o mipular eventos aca se debe manejar
    console.log('ngAfterViewInit');

  }

  ngOnDestroy(): void {
    // delete - solo Cuando se elimina el componente
    //
    console.log('ngOnDestroy');

  }

  imgError() {
    this.img = this.img_notfound;
  }

  imgLoaded(){
    console.log('Log hijo ')
    this.loaded.emit(this.img);
  }

}
