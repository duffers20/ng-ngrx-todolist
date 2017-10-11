import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state-management/state/app-state';
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
  public todosRemaining: Observable<number>;

  constructor(private store: Store<AppState>) {
   this.todoList = this.store.select(state => state.main.todoList);
   this.todosRemaining = this.store.select(state => state.main.todosRemaining);
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
