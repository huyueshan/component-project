import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModuleComponent } from './component-module.component';
import { RouterModule } from '@angular/router';
import { CzgInViewModule } from './czg-in-view/czg-in-view.module';
import { CzgSwitchModule } from "./czg-switch/CzgSwitchModule";
import { CzgNewTreeModule } from './czg-tree/czg-tree.module';
import { CzgScrollDivModule } from './czg-scroll-div/czg-scroll-div.module';
import { CzgCheckboxModule } from './czg-checkbox/czg-checkbox.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentModuleComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CzgInViewModule,
    CzgSwitchModule,
    CzgNewTreeModule,
    CzgScrollDivModule,
    CzgCheckboxModule
  ],
  exports: [
    CzgInViewModule,
    CzgSwitchModule,
    CzgNewTreeModule,
    CzgScrollDivModule,
    CzgCheckboxModule
  ]
})
export class ComponentModuleModule { }

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ComponentModuleComponent
    }]),
    ComponentModuleModule
  ],

})
export class ComponentsRoutModule { }
