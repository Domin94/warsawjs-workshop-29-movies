import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  async getMovies(){
    var result = await this.movieService.fetchMovies();
    console.log(result);
  }
}
