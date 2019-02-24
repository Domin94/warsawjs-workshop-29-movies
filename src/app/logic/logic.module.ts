import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { LogicRoutingModule } from './logic-routing.module';
import { RouterModule } from '@angular/router';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [PageVideoListComponent, PageVideoProfileComponent],
  imports: [
    CommonModule,
    LogicRoutingModule,
    RouterModule
  ]
  //exports: [PageHomeComponent, PageContactComponent]
})
export class LogicModule { }
