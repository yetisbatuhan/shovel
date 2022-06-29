import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingTripsPageRoutingModule } from './upcoming-trips-routing.module';

import { UpcomingTripsPage } from './upcoming-trips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingTripsPageRoutingModule
  ],
  declarations: [UpcomingTripsPage]
})
export class UpcomingTripsPageModule {}
