import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Card } from './card';

@Injectable()
export class CardService {
  private _cardsURL = "";

  constructor(private http: Http) {
  }

  getCards(type): Observable<Card[]> {
    this._cardsURL = "https://api.themoviedb.org/3/movie/" + type + "?api_key=7daac836cb57a577537d2d5ba0313dc8&language=en-US&page=1";
    return this.http
      .get(this._cardsURL)
      .map((response: Response) => {
        return <Card[]>response.json().results;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
