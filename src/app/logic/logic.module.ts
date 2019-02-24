import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoNotFoundComponent } from './components/page-video-not-found/page-video-not-found.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { LogicRoutingModule } from './logic-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageVideoListComponent, PageVideoNotFoundComponent, PageVideoProfileComponent],
  imports: [
    CommonModule,
    LogicRoutingModule,
    RouterModule
  ]
  //exports: [PageHomeComponent, PageContactComponent]
})
export class LogicModule { }
