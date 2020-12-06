import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CzgInViewComponent } from './czg-in-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CzgInViewComponent],
  exports:[CzgInViewComponent]
})
export class CzgInViewModule { }
