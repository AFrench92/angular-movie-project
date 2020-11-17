import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Favorite } from '../interfaces/favorite';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: any;
  genreId: string = '';
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((urlText) => {
      let queryParam = urlText;
      if (queryParam.get('genreId') === null) {
        this.movieService.getTrending().subscribe((response) => {
          this.movieData = response;
        });
      } else {
        this.movieService
          .getMovies(
            urlText.get('genreId'),
            Number(urlText.get('rating')),
            Number(urlText.get('runTime'))
          )
          .subscribe((response) => {
            this.movieData = response;
          });
      }
    });
  }
  callEditFunction = (favorite: Favorite) => {
    this.movieService.editFavorites(favorite);
  };
}
