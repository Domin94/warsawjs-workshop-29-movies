import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

export type Movies = Array<Movie>;

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})

export class PageVideoListComponent implements OnInit {

  public movies: Movies = null;

  constructor(private movieService: MovieService) { }

  async ngOnInit() {
    this.movies = await this.movieService.fetchMovies();
  }
}
