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
  constructor() {}

  ngOnInit(): void {}

  toggleFavorite = (movie: any) => {
    let newFavorite: Favorite = {
      title: movie.title,
      imgUrl: movie.poster_path,
      id: movie.id,
    };
    this.favoriteEvent.emit(newFavorite);
  };
}
