import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { MasterSetingsComponent } from './core/components/master-setings/master-setings.component';
import { RecordingsComponent } from './core/components/recordings/recordings.component';
import { TimelineComponent } from './core/components/timeline/timeline.component';


const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'settings', component: MasterSetingsComponent },
  { path: 'recordings', component: RecordingsComponent },
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
