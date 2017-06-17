import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './state-management/state/main-state';
import { addTodo, toggleTodo, removeCompleted } from './state-management/actions/main-action-creator';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoList: Todo[] = [];

  constructor(private store: Store<State>) {
    this.store.subscribe(
      state => {
        this.todoList = state.todoList;
      }
    );
  }

  addTodo(newTodo: string) {
    this.store.dispatch(addTodo(newTodo));
  }

  toggleTodo(todoID: number) {
    this.store.dispatch(toggleTodo(todoID));
  }

  removeCompleted() {
    this.store.dispatch(removeCompleted());
  }
}
