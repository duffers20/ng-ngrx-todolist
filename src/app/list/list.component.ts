import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state-management/state/main-state';
import { Todo } from '../model/todo';
import { TOGGLE_TODO } from '../state-management/actions/main-action-creator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public todoList: Todo[] = [];

  constructor(private store: Store<State>) {
    this.store.subscribe(
      state => {
        this.todoList = state.todoList;
      }
    );
  }

  ngOnInit() {
  }

  public toggleTodo(id: number) {
    this.store.dispatch({type: TOGGLE_TODO, payload: id});
  }

}
