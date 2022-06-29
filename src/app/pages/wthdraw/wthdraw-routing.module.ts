import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WthdrawPage } from './wthdraw.page';

const routes: Routes = [
  {
    path: '',
    component: WthdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WthdrawPageRoutingModule {}
