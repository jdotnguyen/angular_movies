import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies/now_playing', pathMatch: 'full' },
  { path: 'movies/:type', component: CardComponent },
  { path: 'movies/details/:id', component: MoviedetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
