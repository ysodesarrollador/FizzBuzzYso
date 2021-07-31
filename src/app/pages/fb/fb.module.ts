import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FbPageRoutingModule } from './fb-routing.module';

import { FbPage } from './fb.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FbPageRoutingModule
  ],
  declarations: [FbPage]
})
export class FbPageModule {}
