import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {


    anioActual :number;
    constructor(){
      this.anioActual = new Date().getFullYear();
    }


}
