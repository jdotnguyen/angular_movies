import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';

import { CardService }          from './card.service';
import { MessageService }       from './message.service';
import { MoviedetailService }   from './moviedetail.service';
import { CastService }          from './cast.service';

import { CardComponent } from './card/card.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CardComponent,
    MoviedetailsComponent
  ],
  providers: [CardService, MoviedetailService, CastService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
