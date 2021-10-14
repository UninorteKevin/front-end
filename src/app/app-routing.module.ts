import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch :'full'},
  {path:'home', component:HomeComponent, children: [
    {path: '', redirectTo: 'products/list', pathMatch :'full'},
    {path: 'products/list', component: ListProductsComponent},
    {path: 'products/detail/:id', component:DetailProductComponent}
  ]},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
