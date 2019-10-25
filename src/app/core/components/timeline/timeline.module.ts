import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TimelineComponent } from './timeline.component';
import { RecordedVideoComponent } from './recorded-video/recorded-video.component';
import { VideoTimelineComponent } from './video-timeline/video-timeline.component';

@NgModule({
  declarations: [
    TimelineComponent,
    RecordedVideoComponent,
    VideoTimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class TimelineModule { }
