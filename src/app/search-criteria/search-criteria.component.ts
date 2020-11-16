import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<NgForm>();
  genreData: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getGenres().subscribe((response) => {
      this.genreData = response;
      console.log(this.genreData);
    });
  }

  getSearchTerms = (form: NgForm): void => {
    this.submitEvent.emit(form);
  };


}
