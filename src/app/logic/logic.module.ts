import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { LogicRoutingModule } from './logic-routing.module';
import { RouterModule } from '@angular/router';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoListItemComponent } from './components/video-list-item/video-list-item.component';

@NgModule({
  declarations: [PageVideoListComponent, PageVideoProfileComponent, VideoListComponent, VideoListItemComponent],
  imports: [
    CommonModule,
    LogicRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    MovieService
  ]
  //exports: [PageHomeComponent, PageContactComponent]
})
export class LogicModule { 

  onInit(){
  }

}
