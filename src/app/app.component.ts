import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './state-management/state/main-state';
import { addTodo, toggleTodo, removeCompleted, deleteTodo } from './state-management/actions/main-action-creator';
import { Todo } from './model/todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoList: Observable<Todo[]>;

  constructor(private store: Store<State>) {
   this.todoList = this.store.select(state => state.todoList);
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

  deleteTodo(todoID: number) {
    this.store.dispatch(deleteTodo(todoID));
  }
}
