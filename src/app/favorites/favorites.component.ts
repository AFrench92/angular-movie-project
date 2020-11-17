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
  displayDetails: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleFavorite = (favorite: Favorite) => {
    this.favoriteEvent.emit(favorite);
  };

  toggleDisplayDetails = () => {
    this.displayDetails = !this.displayDetails;
  };
}
