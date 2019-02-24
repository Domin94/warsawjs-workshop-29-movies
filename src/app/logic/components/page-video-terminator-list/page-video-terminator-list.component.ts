import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movies } from '../page-video-list/page-video-list.component';

@Component({
  selector: 'app-page-video-terminator-list',
  templateUrl: './page-video-terminator-list.component.html',
  styleUrls: ['./page-video-terminator-list.component.css']
})
export class PageVideoTerminatorListComponent implements OnInit {
  public movies: Movies = null;

  constructor(private movieService: MovieService) { }

  async ngOnInit() {
    this.movies = await this.movieService.fetchTerminatorMovies();
  }
}
