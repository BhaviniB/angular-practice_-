import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';

import { FilterPipe } from '../shared/pipes/filter.pipe';
import { CatPipe } from '../shared/pipes/cat.pipe';


@NgModule({
  declarations: [FilterPipe, CatPipe, ProductListComponent, HeaderComponent, HomeComponent, ProductDetailComponent, AddProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
