import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ListFavoritesComponent } from './components/users/list-favorites/list-favorites.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavLeftComponent } from './components/nav-bar/nav-left/nav-left.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    ListFavoritesComponent,
    NotFoundComponent,
    NavBarComponent,
    NavLeftComponent,
    ListProductsComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
