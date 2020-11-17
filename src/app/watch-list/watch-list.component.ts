import { Component, OnInit } from '@angular/core';
import { Favorite } from '../interfaces/favorite';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  favorites: Favorite[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.favorites = this.movieService.getFavorites();
  }
  callEditFunction = (favorite: Favorite) => {
    this.movieService.editFavorites(favorite);
  };
}
