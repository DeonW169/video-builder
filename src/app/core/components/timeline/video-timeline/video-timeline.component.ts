import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-timeline',
  templateUrl: './video-timeline.component.html',
  styleUrls: ['./video-timeline.component.scss']
})
export class VideoTimelineComponent implements OnInit {
  recordedVideos = [
    { id: 1, name: 'App Recorded Video', time: '2s' },
    { id: 2, name: 'App Recorded Video', time: '1s' },
    { id: 3, name: 'App Recorded Video', time: '3s' }

  ]

  constructor() { }

  ngOnInit() {
  }

}
