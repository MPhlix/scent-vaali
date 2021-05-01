import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { TabNavbarComponent } from './components/tab-navbar/tab-navbar.component';
import { SvgModule } from '../shared/svg/svg.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationModule } from '../shared/navigation/navigation.module';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    SearchComponent,
    TabNavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    NavigationModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    TabNavbarComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
