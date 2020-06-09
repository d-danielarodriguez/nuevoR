import { Component } from '@angular/core';
import { CalculosService } from './calculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'AngularAPI';

  lado:number;
  area:number;
  perimetro:number;

  constructor(public calculosService:CalculosService){}

  enviar():void{
    console.log(this.lado);
    let urlapi = `http://localhost:3000/calculos/${this.lado}`;
    console.log(urlapi);
    this.calculosService.getJson(urlapi).subscribe( (data) => {
      console.log(data);
      this.area=data['area'];
      this.perimetro=data['perimetro'];
    });
  }

}
