import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgeNamePage } from './age-name.page';

const routes: Routes = [
  {
    path: '',
    component: AgeNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgeNamePageRoutingModule {}
