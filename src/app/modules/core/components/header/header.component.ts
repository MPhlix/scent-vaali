import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modules/shared/products-repository/interfaces/Category/Category';
import { CategoriesService } from 'src/app/modules/shared/products-repository/services/categories.service';
import { NavigationRoute } from 'src/app/modules/shared/navigation/interfaces/NavigationRoute';
import { RouteService } from 'src/app/modules/shared/navigation/services/route.service';

interface CategoryRoute {
  id: 1,
  category: Category
  route: NavigationRoute
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  topMostBarConfig = {
    visible: false
  };

  name = 'akshay';

  navigationRoutes: NavigationRoute[];

  categories: Category[];

  categoryRoutes: NavigationRoute[];

  constructor(private categoriesService: CategoriesService, private routeService: RouteService) {
    this.categories = categoriesService.getAll();
    this.navigationRoutes = routeService.getNavRoutes();
    this.categoryRoutes = this.mergeRouteWithCategories();
  }

  ngOnInit(): void {
  }

  mergeRouteWithCategories(): NavigationRoute[] {
    let categoryRoutes: NavigationRoute[] = [];
    try {
      categoryRoutes.push(...this.navigationRoutes);
      for (let i = 0; i < this.categories.length; i++) {
        const category = this.categories[i];
        const route: NavigationRoute = {
          Id: categoryRoutes.length + (i+1),
          DisplayName: category.Name,
          RouteName: '/shop/' + category.Id
        };
        categoryRoutes.push(route);
      }
      return categoryRoutes;
    }
    catch (error) {
      console.error(error);
    }
  }
}
