import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingFilterComponent } from './components/shopping-filter/shopping-filter.component';
import { ProductsDisplayOptionsComponent } from './components/products-display-options/products-display-options.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ShoppingComponent }
];

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingFilterComponent,
    ProductsDisplayOptionsComponent,
    ProductsGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  bootstrap: [ShoppingComponent]
})
export class ShoppingModule { }
