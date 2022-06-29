import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WthdrawPageRoutingModule } from './wthdraw-routing.module';

import { WthdrawPage } from './wthdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WthdrawPageRoutingModule
  ],
  declarations: [WthdrawPage]
})
export class WthdrawPageModule {}
