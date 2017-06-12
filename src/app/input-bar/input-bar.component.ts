import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state-management/state/main-state';
import { ADD_TODO, MARK_ALL_COMPLETE } from '../state-management/actions/main-action-creator';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  public addTodo(newTodo: string) {
    this.store.dispatch({type: ADD_TODO, payload: newTodo});
  }
}
