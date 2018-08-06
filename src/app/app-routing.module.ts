import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataParentComponent} from './parent-data-to-child/data-parent.component';
import {EventParentComponent} from './child-parent-event/event-parent.component';
import {LocalParentComponent} from './parent-child-local/local-parent.component';
import {ViewParentComponent} from './parent-child-view/view-parent.component';
import {ServiceParentComponent} from './parent-child-service/service-parent.component';

const appRoutes: Routes = [
  {path: 'parent-child-data', component: DataParentComponent},
  {path: 'child-parent-event', component: EventParentComponent},
  {path: 'parent-child-local-variable', component: LocalParentComponent},
  {path: 'parent-child-view', component: ViewParentComponent},
  {path: 'parent-child-service', component: ServiceParentComponent},
  {
    path: '',
    redirectTo: '/parent-child-data',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ]
})
export class AppRoutingModule {
}
