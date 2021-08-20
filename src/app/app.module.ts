import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { TextSection1Component } from './myContainer/text-section1/text-section1.component';
import { TextSection2Component } from './myContainer/text-section2/text-section2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayDatabindComponent } from './databind/two-way-databind/two-way-databind.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// adding ngx-bootstrap dependencies
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

// adding routes
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // {path:'', component: HomeComponent}, we can set default route
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'products', component: ProductsComponent},
  {path:'contact', component: ContactComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    TextSection1Component,
    TextSection2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventBindComponent,
    TwoWayDatabindComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
