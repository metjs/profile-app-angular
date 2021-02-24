import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor() { }
   profile: Profile[] = []
  ngOnInit(): void {
  }

}
