import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';                            // add
import { Observable } from 'rxjs/Observable';

import { Increment, Decrement } from '@state/counter/counter.actions';  // add
import { State } from '@state/counter/counter.state';                   // add

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    count$: Observable<number>;                                         // add

    constructor(private store: Store<State>) {                          // change
        this.count$ = store.pipe(select('count'));                      // add
    }

    increment() {                                                        // add
        this.store.dispatch(new Increment());                           // add
    }                                                                   // add

    decrement() {                                                        // add
        this.store.dispatch(new Decrement());                           // add
    }                                                                   // add

    ngOnInit() {
    }

}
