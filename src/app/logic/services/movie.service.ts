import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movies } from '../components/page-video-list/page-video-list.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  fetchMovies() {
    return <Promise<Movies>>this.httpClient.get(environment.moviesURL).toPromise();
  }

  fetchTerminatorMovies() {
    return <Promise<Movies>>this.httpClient.get(environment.moviesTerminatorURL).toPromise();
  }

  async fetchMovieById(movieId) {
    const list = await this.fetchMovies();
    const movie = list.find((movie) => {
      return movie.id === movieId;
    })

    return movie;
  }
}
