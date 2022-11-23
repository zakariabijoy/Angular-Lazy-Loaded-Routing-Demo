import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    SharedModule
  ]
})
export class ParentModule { }
