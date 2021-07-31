import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info/card-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CardInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CardInfoComponent
  ]
})
export class ComponentsModule { }
