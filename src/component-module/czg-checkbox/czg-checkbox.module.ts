import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CzgCheckboxComponent } from './czg-checkbox.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
  ],
  declarations: [CzgCheckboxComponent],
  exports: [CzgCheckboxComponent]
})
export class CzgCheckboxModule { }
