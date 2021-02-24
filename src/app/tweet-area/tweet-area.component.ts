import { Component, OnInit } from '@angular/core';
import { Tweet } from './tweet';

@Component({
  selector: 'app-tweet-area',
  templateUrl: './tweet-area.component.html',
  styleUrls: ['./tweet-area.component.css']
})
export class TweetAreaComponent implements OnInit {

  constructor() { }
  tweet: Tweet[] = []
  ngOnInit(): void {
  }

}
