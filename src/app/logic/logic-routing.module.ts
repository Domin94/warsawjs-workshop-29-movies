import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { PageVideoTerminatorListComponent } from './components/page-video-terminator-list/page-video-terminator-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageVideoListComponent
  },
  {
    path: 'video-list-item/:id',
    component: PageVideoProfileComponent
  },
  {
    path: 'video-terminator-list',
    component: PageVideoTerminatorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
