import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexNamePageRoutingModule } from './sex-name-routing.module';

import { SexNamePage } from './sex-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexNamePageRoutingModule
  ],
  declarations: [SexNamePage]
})
export class SexNamePageModule {}
