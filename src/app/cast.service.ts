import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Cast } from './cast';

@Injectable()
export class CastService {
  private _castsURL = "";

  constructor(private http: Http) {
  }

  getCasts(type): Observable<Cast[]> {
    this._castsURL = "https://api.themoviedb.org/3/movie/" + type + "/credits?api_key=7daac836cb57a577537d2d5ba0313dc8";
    return this.http
      .get(this._castsURL)
      .map((response: Response) => {
        return <Cast[]>response.json().cast;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
