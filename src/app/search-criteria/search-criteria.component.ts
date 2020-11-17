import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<NgForm>();
  genreData: any;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getGenres().subscribe((response) => {
      this.genreData = response;
      console.log(this.genreData);
    });
  }

  getSearchTerms = (form: NgForm): void => {
    this.router.navigate(['/home'], {
      queryParams: {
        genreId: form.value.genre,
        rating: form.value.rating,
        runTime: form.value.runTime,
      },
    });
  };
}
