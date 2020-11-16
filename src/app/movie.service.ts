import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieBaseUrl: string = 'https://api.themoviedb.org/3/discover/movie/';
  movieTrendingUrl: string = 'https://api.themoviedb.org/3/trending/movie/week';
  key: string = 'f644be78b05b1614b0b665ed7b7e80dc';
  genreUrl: string = 
    'https://api.themoviedb.org/3/genre/movie/list?api_key=f644be78b05b1614b0b665ed7b7e80dc';

  constructor(private http: HttpClient) {}

  getMovies = (genreId: string, rating: number) => {
    return this.http.get(this.movieBaseUrl, {
      params: {
        api_key: this.key,
        with_genres: genreId,
        "vote_average.gte":  `${rating}`
      },
    });
  };

  getGenres = () => {
    return this.http.get(this.genreUrl); 
  };

  getTrending = () => {
    return this.http.get(this.movieTrendingUrl, {
      params:{
        api_key: this.key
      }
    })
  }
}
