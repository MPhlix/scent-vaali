import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaFeedComponent } from './social-media-feed.component';

describe('SocialMediaFeedComponent', () => {
  let component: SocialMediaFeedComponent;
  let fixture: ComponentFixture<SocialMediaFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
