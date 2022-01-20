import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnhanceNamePipe } from './pipes/enhance-name.pipe';



@NgModule({
  declarations: [
    EnhanceNamePipe
  ],
  exports: [
    EnhanceNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
