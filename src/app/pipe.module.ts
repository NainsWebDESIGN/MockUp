import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransLatePipe } from '@pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TransLatePipe
  ],
  exports: [
    TransLatePipe
  ]
})
export class PipeModule { }
