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
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
