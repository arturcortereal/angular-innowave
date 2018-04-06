import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAppComponent } from './todo-app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';        // add

const routes: Routes = [{
    path: '',
    component: TodoAppComponent,
    children: [                                                             // add
        { path: ':index', component: TodoItemComponent },                   // add
    ]                                                                       // add
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
