import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SexNamePage } from './sex-name.page';

const routes: Routes = [
  {
    path: '',
    component: SexNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SexNamePageRoutingModule {}
