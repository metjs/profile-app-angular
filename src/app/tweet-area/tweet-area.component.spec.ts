import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetAreaComponent } from './tweet-area.component';

describe('TweetAreaComponent', () => {
  let component: TweetAreaComponent;
  let fixture: ComponentFixture<TweetAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
