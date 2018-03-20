import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovieDetail } from '../moviedetail';
import { MoviedetailService } from '../moviedetail.service';
import { Cast } from '../cast';
import { CastService } from '../cast.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  _movieDetailsArray: MovieDetail[];
  _movieDetailsCastArray: Cast[];
  _movieDetailsCompaniesArray: MovieDetail[];

  constructor(private movieDetailService: MoviedetailService, private castService: CastService, private route: ActivatedRoute, private _router: Router) {
  }

  routing(movie_id) {
    console.log(movie_id);
    this._router.navigate(["movies/details/" + movie_id]);
  }

  getMovieId(): void {
    this.route.params.subscribe(params => this.getMovieDetails(params.id));
  }

  getMovieDetails(id): void {
    this.movieDetailService.getMovieDetails(id)
      .subscribe(
        resultArray => this._movieDetailsArray = resultArray,
        error => console.log("Error :: " + error)
      )
    
    this.castService.getCasts(id)
      .subscribe(
        resultArray => this._movieDetailsCastArray = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  ngOnInit(): void {
    this.getMovieId();
  }
}
