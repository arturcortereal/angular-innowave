import { Component, OnInit } from '@angular/core';                  // add
import { Store } from '@ngrx/store';                                // add

import { AddTodo } from '@state/todo-list/todo-list.actions';       // add
import { State } from '@state/todo-list/todo-list.state';           // add

@Component({
    selector: 'app-todo-adder',
    templateUrl: './todo-adder.component.html',
    styleUrls: ['./todo-adder.component.css']
})
export class TodoAdderComponent implements OnInit {

    newTodo: string;

    constructor(private store: Store<State>) { }                    // add

    ngOnInit() {
    }

    addTodo() {
        this.store.dispatch(                                        // add
            new AddTodo({ name: this.newTodo })                     // add
        );                                                          // add
    }

}
