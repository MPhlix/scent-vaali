import { Injectable } from '@angular/core';
import * as navRoutesJson from 'src/assets/json/navigation-routes.json';
import { NavigationRoute } from '../interfaces/NavigationRoute';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private navRoutes: NavigationRoute[];

  constructor() {
    this.navRoutes = (navRoutesJson as any).default as NavigationRoute[];
  }

  getNavRoutes() {
    return this.navRoutes;
  }
}