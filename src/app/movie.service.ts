import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieBaseUrl: string = 'https://api.themoviedb.org/3/discover/movie/';
  key: string = 'f644be78b05b1614b0b665ed7b7e80dc';
  genreUrl: string =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=f644be78b05b1614b0b665ed7b7e80dc';

  constructor(private http: HttpClient) {}

  getMovies = (genreId: string) => {
    return this.http.get(this.movieBaseUrl, {
      params: {
        api_key: this.key,
        with_genres: genreId,
      },
    });
  };

  getGenres = () => {
    return this.http.get(this.genreUrl);
  };
}
