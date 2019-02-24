import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movies } from '../page-video-list/page-video-list.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  @Input() movies: Movies = null;
  
  constructor() { }

  ngOnInit() {
  }
}
