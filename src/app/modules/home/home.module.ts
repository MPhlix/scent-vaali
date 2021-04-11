//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Custom modules
import { HomeComponent } from './home/home.component';

//Third party modules
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SvgModule } from '../shared/svg/svg.module';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { DealsComponent } from './components/deals/deals.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { ServicesMiniComponent } from './components/services-mini/services-mini.component';
import { NewsComponent } from './components/news/news.component';
import { SocialMediaFeedComponent } from './components/social-media-feed/social-media-feed.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, AboutComponent, BannerComponent, DealsComponent, PromotionsComponent, HighlightsComponent, ServicesMiniComponent, NewsComponent, SocialMediaFeedComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    SvgModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    HomeComponent,
    SvgModule
  ]
})
export class HomeModule { }
