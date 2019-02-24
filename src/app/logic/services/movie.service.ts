import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  async fetchMovies() {
    return await this.httpClient.get('/assets/data.json').toPromise();
  }
}
