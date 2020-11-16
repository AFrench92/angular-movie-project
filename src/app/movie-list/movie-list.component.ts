import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: any;
  genreId: string = '';
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies(this.genreId).subscribe((response) => {
      this.movieData = response;
    });
  }

  getMovies = (genreId: string) => {
    console.log(genreId);
    this.movieService.getMovies(genreId).subscribe((response) => {
      this.movieData = response;
    });
  };
}
