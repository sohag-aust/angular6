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
import { Icecream1Component } from './products/icecream1/icecream1.component';
import { Icecream2Component } from './products/icecream2/icecream2.component';
import { Icecream3Component } from './products/icecream3/icecream3.component';
import { Icecream4Component } from './products/icecream4/icecream4.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DesignUtilityService } from './services/design-utility.service';

import {HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './home/comp1/comp1.component';
import { Comp2Component } from './home/comp2/comp2.component';
import { Comp3Component } from './home/comp3/comp3.component';
import { Comp4Component } from './home/comp4/comp4.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { Comp5Component } from './life-cycle-hooks/comp5/comp5.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { CompViewChildComponent } from './view-child/comp-view-child/comp-view-child.component';
import { DirectiveDirective } from './appDirective/directive.directive';
import { HostListenerDirectiveDirective } from './appDirective/host-listener-directive.directive';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

const appRoutes: Routes = [
  // {path:'', component: HomeComponent}, we can set default route
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'products', children: [
    {path:'', component: ProductsComponent}, // path here look like : localhost:4200/products
    {path:'cream1', component: Icecream1Component},
    {path:'cream2', component: Icecream2Component},
    {path:'cream3', component: Icecream3Component},
    {path:'cream4', component: Icecream4Component},
  ]},
  {path:'contact', component: ContactComponent},
  {path:'buy-products', component: ParentComponent},
  {path:'life-cycle-hooks', component: LifeCycleHooksComponent},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'template-driven-Form', component: TemplateDrivenFormComponent},
  {path: 'reactive-Form', component: ReactiveFormComponent}
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
    ProductsComponent,
    Icecream1Component,
    Icecream2Component,
    Icecream3Component,
    Icecream4Component,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    LifeCycleHooksComponent,
    Comp5Component,
    ViewChildComponent,
    CompViewChildComponent,
    DirectiveDirective,
    HostListenerDirectiveDirective,
    PipesComponent,
    CustomPipe,
    FilterPipePipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
