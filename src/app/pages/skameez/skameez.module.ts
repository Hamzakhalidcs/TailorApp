import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SKameezPageRoutingModule } from './skameez-routing.module';

import { SKameezPage } from './skameez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SKameezPageRoutingModule
  ],
  declarations: [SKameezPage]
})
export class SKameezPageModule {}
