import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';                            // add
import { Observable } from 'rxjs/Observable';

import { Increment, Decrement, Load } from '@state/counter/counter.actions'; // change
import { State } from '@state/counter/counter.state';

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

    load() {
        this.store.dispatch(new Load());
    }

}
