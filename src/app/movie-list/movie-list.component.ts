import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: any;
  genreId: string = '';
  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.queryParamMap.subscribe((urlText)=>{
        let queryParam = urlText;
        if (queryParam.get("genreId") === null){
          this.movieService.getTrending().subscribe((response)=>{
            this.movieData = response;
          });
        } else{
            this.movieService.getMovies(urlText.get("genreId"), Number(urlText.get("rating"))).subscribe((response)=>{
              this.movieData = response;
            })
        }
      })

    };
  

  search = (form) => {
  this.router.navigate(["/home"], {
    queryParams: {
      genreId: form.value.genre,
      rating: form.value.rating, 
    }
  }) 
  }; 


};
