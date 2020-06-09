import { CalculosService } from './calculos.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:[
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations:[
    AppComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ CalculosService ]
})
export class AppModule { }
