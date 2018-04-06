import { Action } from '@ngrx/store';

export enum TodoListActionTypes {
    ADD_TODO = '[TODO-LIST] Add TODO',
    TOGGLE_TODO = '[TODO-LIST] Toggle TODO',
}

export class AddTodo implements Action {
    readonly type = TodoListActionTypes.ADD_TODO;
    constructor(public payload: {name: string}) { }
}

export class ToggleTodo implements Action {
    readonly type = TodoListActionTypes.TOGGLE_TODO;
    constructor(public payload: {index: number, done?: boolean}) { }
}

export type TodoListActions
= AddTodo
| ToggleTodo;
