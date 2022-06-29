import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingTripsPage } from './upcoming-trips.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingTripsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingTripsPageRoutingModule {}
