import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CzgScrollDivComponent } from './czg-scroll-div.component';
import { NgSlimScrollModule } from 'ngx-slimscroll';

@NgModule({
  imports: [
    CommonModule,
    NgSlimScrollModule,
  ],
  declarations: [CzgScrollDivComponent],
  exports: [CzgScrollDivComponent]
})
export class CzgScrollDivModule { }
