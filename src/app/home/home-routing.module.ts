import { AddProductComponent } from './components/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductsResolver } from './resolvers/products.resolver';

const routes: Routes = [
{path:'', component: HomeComponent,
children:[{path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
{path: '', component: ProductListComponent, 
resolve:{ productList: ProductsResolver}},
{path: 'add', component: AddProductComponent},
{path: 'products/:productId', component: ProductDetailComponent, resolve: { product: ProductResolver}},

]
},
// {path: 'cart', component:CartComponent, 
// resolve:{ productList: CartResolver}},]
// },
{path: '/', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
