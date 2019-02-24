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
}
