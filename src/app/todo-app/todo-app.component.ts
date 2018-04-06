import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';                                // add
import { Observable } from 'rxjs/Observable';                               // add

import { AddTodo, ToggleTodo } from '@state/todo-list/todo-list.actions';   // add
import { State } from '@state/todo-list/todo-list.state';                   // add

@Component({
    selector: 'app-todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

    newTodo: string;
    todoList$: Observable<State>;

    constructor(private store: Store<State>) {                                  // change
        this.todoList$ = store.pipe(select('todoList'));                        // add
    }

    ngOnInit() {
    }

    addTodo() {
        this.store.dispatch(                                                    // change
            new AddTodo({ name: this.newTodo })                                 // change
        );                                                                      // change
    }

    toggleTodo(index: number) {                                                 // add
        this.store.dispatch(                                                    // add
            new ToggleTodo({ index })                                           // add
        );                                                                      // add
    }
}
