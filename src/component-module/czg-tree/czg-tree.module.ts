import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CzgTreeComponent, CzgNodeComponent } from './czg-tree.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    CzgNodeComponent,
    CzgTreeComponent],
  exports: [CzgTreeComponent]
})
export class CzgNewTreeModule { }
