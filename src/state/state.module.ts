import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';                          // add
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';

import { counterReducer } from '@state/counter/counter.reducer';
import { CounterEffects } from '@state/counter/counter.effects';
import { todoListReducer } from '@state/todo-list/todo-list.reducer';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forRoot({
            count: counterReducer,
            todoList: todoListReducer
        }),
        EffectsModule.forRoot([                                         // add
            CounterEffects                                              // add
        ]),                                                             // add
        StoreDevtoolsModule.instrument()
    ]
})
export class StateModule { }
