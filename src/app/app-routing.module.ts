import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';

const routes: Routes = [
  { path: '' , component : LayoutComponent , children: [
    { path: 'dashboard', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule) }
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
