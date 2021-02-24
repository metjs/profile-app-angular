import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { Tweet } from './tweet';

@Component({
  selector: 'app-tweet-area',
  templateUrl: './tweet-area.component.html',
  styleUrls: ['./tweet-area.component.css'],
  providers:[TweetService]
})
export class TweetAreaComponent implements OnInit {

  constructor(private tweetService:TweetService) { }
  tweet: Tweet[] = []
  ngOnInit() {
    this.tweetService.getTweets().subscribe(data => {
      this.tweet= data;
    } )
  }

}
