import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorded-video',
  templateUrl: './recorded-video.component.html',
  styleUrls: ['./recorded-video.component.scss']
})
export class RecordedVideoComponent implements OnInit {
  recordingVolume = 35;
  recordingSpeed = 1;
  playbackRangeMin = 0;
  playbackRangeMax = 2;
  playbackRangeVal = 1;

  constructor() { }

  ngOnInit() {
  }

}
