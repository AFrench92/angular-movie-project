import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emit } from 'process';
import { Favorite } from '../interfaces/favorite';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movieRef: any;
  @Output() favoriteEvent = new EventEmitter<Favorite>();
  @Output() detailEvent = new EventEmitter<void>();
  // displayDetails: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleFavorite = (movie: any) => {
    let newFavorite: Favorite = {
      title: movie.title,
      imgUrl: movie.poster_path,
      id: movie.id,
      backdrop_path: movie.backdrop_path,
      overview: movie.overview,
    };
    this.favoriteEvent.emit(newFavorite);
  };

  toggleDisplayDetails = () => {
    // this.displayDetails = !this.displayDetails;
    this.detailEvent.emit();
  };
}
