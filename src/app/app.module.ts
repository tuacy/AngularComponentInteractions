import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {DataParentComponent} from './parent-data-to-child/data-parent.component';
import {DataChildComponent} from './parent-data-to-child/data-child.component';
import {RouterModule} from '@angular/router';
import { EventChildComponent } from './child-parent-event/event-child.component';
import { EventParentComponent } from './child-parent-event/event-parent.component';
import { LocalParentComponent } from './parent-child-local/local-parent.component';
import { LocalChildComponent } from './parent-child-local/local-child.component';
import { ViewChildComponent } from './parent-child-view/view-child.component';
import { ViewParentComponent } from './parent-child-view/view-parent.component';
import { ServiceParentComponent } from './parent-child-service/service-parent.component';
import { ServiceChildComponent } from './parent-child-service/service-child.component';
import { DataChildSetterComponent } from './parent-data-to-child/data-child-setter.component';
import { DataChildChangesComponent } from './parent-data-to-child/data-child-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    DataParentComponent,
    DataChildComponent,
    EventChildComponent,
    EventParentComponent,
    LocalParentComponent,
    LocalChildComponent,
    ViewChildComponent,
    ViewParentComponent,
    ServiceParentComponent,
    ServiceChildComponent,
    DataChildSetterComponent,
    DataChildChangesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
