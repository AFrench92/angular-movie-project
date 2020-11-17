import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Favorite } from '../interfaces/favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  @Input() favoriteRef: Favorite;
  @Output() favoriteEvent = new EventEmitter<Favorite>();

  constructor() {}

  ngOnInit(): void {}

  toggleFavorite = (favorite: Favorite) => {
    this.favoriteEvent.emit(favorite);
  };
}
