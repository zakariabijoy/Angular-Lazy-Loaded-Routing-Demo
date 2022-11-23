import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule 
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
