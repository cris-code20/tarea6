import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgeNamePageRoutingModule } from './age-name-routing.module';

import { AgeNamePage } from './age-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgeNamePageRoutingModule
  ],
  declarations: [AgeNamePage]
})
export class AgeNamePageModule {}
