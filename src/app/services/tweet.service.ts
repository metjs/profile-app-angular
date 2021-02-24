import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tweet } from '../tweet-area/tweet';

@Injectable()
export class TweetService {

  constructor(private http:HttpClient) { }
  dataPath = "http://localhost:3000/tweets"
  getTweets():Observable<Tweet[]>{
    return this.http.get<Tweet[]>(this.dataPath);
  }
}
