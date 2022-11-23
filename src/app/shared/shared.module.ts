import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 


@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule 
  ],
  exports:[ChildComponent]
})
export class SharedModule { }
