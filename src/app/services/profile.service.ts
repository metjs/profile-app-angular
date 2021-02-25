import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Profile } from '../profile-info/profile';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) { }
  dataPath = "http://localhost:3000/profiles/1"
  getProfile():Observable<Profile[]>{
    return this.http.get<Profile[]>(this.dataPath);
  }
}
