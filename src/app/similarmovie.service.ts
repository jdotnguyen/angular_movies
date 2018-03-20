import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { SimilarMovie } from './similarmovie';

@Injectable()
export class SimilarmovieService {
  private _similarMoviesURL = "";

  constructor(private http: Http) {
  }

  getMovieDetails(movie_id): Observable<SimilarMovie[]> {
    this._similarMoviesURL = "https://api.themoviedb.org/3/movie/" + movie_id + "/similar?api_key=7daac836cb57a577537d2d5ba0313dc8&language=en-US";
    return this.http
      .get(this._similarMoviesURL)
      .map((response: Response) => {
        return <SimilarMovie[]>response.json().results;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
