import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { TweetAreaComponent } from './tweet-area/tweet-area.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    TweetAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
