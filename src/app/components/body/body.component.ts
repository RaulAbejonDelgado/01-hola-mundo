
import {Component} from'@angular/core';

@Component({
  selector:'app-body',
  templateUrl:'./body.component.html',
})
export class BodyComponent{

  mostrar:boolean = true;
  frase:any = {
    mensaje:'Experto en versos no escritos',
    autor:'Raul'
  };

  personajes:string[] = ['Guille','Ryu','Ken']

}
