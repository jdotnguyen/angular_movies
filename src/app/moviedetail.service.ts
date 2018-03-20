import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { MovieDetail } from './moviedetail';

@Injectable()
export class MoviedetailService {
  private _movieDetailsURL = "";

  constructor(private http: Http) {
  }

  getMovieDetails(movie_id): Observable<MovieDetail[]> {
    this._movieDetailsURL = "https://api.themoviedb.org/3/movie/" + movie_id + "?api_key=7daac836cb57a577537d2d5ba0313dc8&language=en-US";
    return this.http
      .get(this._movieDetailsURL)
      .map((response: Response) => {
        return <MovieDetail[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
