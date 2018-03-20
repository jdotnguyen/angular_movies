import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  _cardsArray: Card[];

  constructor(private cardService: CardService, private route: ActivatedRoute, private _router: Router) {
  }

  routing(movie_id) {
    console.log(movie_id);
    this._router.navigate(["movies/details/" + movie_id]);
  }

  getCardId(): void {
    this.route.params.subscribe(params => this.getCards(params.type));
  }

  getCards(type): void {
    this.cardService.getCards(type)
      .subscribe(
        resultArray => this._cardsArray = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  ngOnInit(): void {
    this.getCardId();
  }
}
