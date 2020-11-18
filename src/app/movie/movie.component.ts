import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emit } from 'process';
import { Favorite } from '../interfaces/favorite';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movieRef: any;
  @Input() indexRef: number;
  @Output() favoriteEvent = new EventEmitter<Favorite>();
  @Output() detailEvent = new EventEmitter<void>();
  // displayDetails: boolean = false;
  isFav = false;

  // isFavorite(): boolean {
  //   console.log('b', this.movieRef);
  //   return this.movieService.favorites.some((movie) => {
  //     console.log('c', movie);
  //     if (movie === this.movieRef) {
  //       console.log('a', movie);
  //       return true;
  //     }
  //   });
  // }
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.isFav = this.movieService.favorites.some((movie) => {
      return movie.id === this.movieRef.id;
    });
  }

  toggleFavorite = (movie: any) => {
    let newFavorite: Favorite = {
      title: movie.title,
      imgUrl: movie.poster_path,
      id: movie.id,
      backdrop_path: movie.backdrop_path,
      overview: movie.overview,
    };
    this.favoriteEvent.emit(newFavorite);
    this.isFav = !this.isFav;
  };

  toggleDisplayDetails = () => {
    // this.displayDetails = !this.displayDetails;
    this.detailEvent.emit();
  };
}
