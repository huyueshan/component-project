import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { ComposeMessageModule } from './compose-message/compose-message.module';
import { OutletRouterComponent } from './outlet-router.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path:'',
          component:OutletRouterComponent,
          // children:[
          //   {
          //     path: 'components',
          //     loadChildren: () => import('src/component-module/component-module.module').then(m => m.ComponentsRoutModule)
          //   },

          //   {
          //     path: 'compose11',
          //     component: ComposeMessageComponent,
          //     outlet: 'popup'
          //   },
          // ]
        },

      ]
    ),
    ComposeMessageModule
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  declarations: [
    OutletRouterComponent,
    // ComposeMessageComponent
  ]
})
export class OutletRouterModule { }
