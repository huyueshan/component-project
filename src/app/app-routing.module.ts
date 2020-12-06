import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeMessageComponent } from 'src/pages/outlet-router/compose-message/compose-message.component';
import { ComposeMessageModule } from 'src/pages/outlet-router/compose-message/compose-message.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full'
  },
  {
    path: 'components',
    loadChildren: () => import('src/component-module/component-module.module').then(m => m.ComponentsRoutModule)
  },
  {
    path: 'home',
    loadChildren: () => import('src/pages/home/home.module').then(m => m.HomeRoutModule)
  },
  {
    path: 'outlet',
    loadChildren: () => import('src/pages/outlet-router/outlet-router.module').then(m => m.OutletRouterModule)
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'compose1',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'compose1',
    component: ComposeMessageComponent,
    outlet: 'popup2'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComposeMessageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
