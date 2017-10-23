import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { TodoListComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'active', component: TodoListComponent, data: { filter: 'active' }},
  { path: 'completed', component: TodoListComponent, data: { filter: 'completed' }},
  { path: 'all', component: TodoListComponent, data: { filter: 'all' }},
  { path: '', redirectTo: '/all', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: environment.enableRouterTracing })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
