import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-page-video-profile',
  templateUrl: './page-video-profile.component.html',
  styleUrls: ['./page-video-profile.component.css']
})
export class PageVideoProfileComponent implements OnInit {
  movie: Movie = null;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  async ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.movie = await this.movieService.fetchMovieById(id);
  }
}
