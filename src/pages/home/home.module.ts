import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ComponentModuleModule } from 'src/component-module/component-module.module';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { SortablejsModule } from 'ngx-sortablejs';
@NgModule({
  imports: [
    CommonModule,
    ComponentModuleModule,
    NgSlimScrollModule,
    SortablejsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HomeComponent
    }]),
    HomeModule,
  ],
  declarations: [],

})
export class HomeRoutModule { }
