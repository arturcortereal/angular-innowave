import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';                            // add
import { Observable } from 'rxjs/Observable';

import { Increment, Decrement } from '@state/counter/counter.actions';  // add
import { State } from '@state/counter/counter.state';                   // add

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<State>) {
      this.count$ = store.pipe(select('count'));
  }

  increment() {
      this.store.dispatch(new Increment());
  }

  decrement() {
      this.store.dispatch(new Decrement());
  }                                                                   // add

  ngOnInit() {
  }

}
