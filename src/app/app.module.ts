import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterSetingsComponent } from './master-setings/master-setings.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RecordedVideoComponent } from './timeline/recorded-video/recorded-video.component';
import { VideoTimelineComponent } from './timeline/video-timeline/video-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterSetingsComponent,
    RecordingsComponent,
    TimelineComponent,
    RecordedVideoComponent,
    VideoTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
