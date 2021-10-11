import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {Routes,RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './product.service';
import { FindProductComponent } from './find-product/find-product.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './DataService';
import { ToastrModule } from 'ngx-toastr';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillComponent } from './bill/bill.component';
import { LoginComponent } from './login/login.component';
import { RouteGaurdService } from './route-gaurd.service';



const menus:Routes=[
  {path:'', component:LoginComponent},
  {path:'form',component:ProductFormComponent,canActivate:[RouteGaurdService]},
  {path:'find',component:FindProductComponent,canActivate:[RouteGaurdService]},
  {path:'list',component:ListProductsComponent,canActivate:[RouteGaurdService]},
  {path:'cart',component:ShopCartComponent,canActivate:[RouteGaurdService]},
  {path:'bill',component:BillComponent,canActivate:[RouteGaurdService]},
  {path:'**', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductFormComponent,
    FindProductComponent,
    ShopCartComponent,
    BillComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    RouterModule.forRoot(menus),
    ToastrModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
