import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from './profile';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  providers:[ProfileService]
})
export class ProfileInfoComponent implements OnInit {

  constructor(private Profile:ProfileService) { }
   profile: Profile[] = []
  ngOnInit() {
    this.Profile.getProfile().subscribe(data => {
      this.profile= data;
    } )
  }

}
