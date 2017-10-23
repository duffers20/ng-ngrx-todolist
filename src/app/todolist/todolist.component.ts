import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state-management/state/app-state';
import { addTodo, toggleTodo, removeCompleted, deleteTodo } from '../state-management/actions/main-action-creator';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoListComponent {
  public todoList: Observable<Todo[]>;
  public todosRemaining: Observable<number>;
  public temp: string;

  constructor (
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
   this.todoList = this.store.select(state => state.main.todoList);
   this.todosRemaining = this.store.select(state => state.main.todosRemaining);
   this.temp = this.route.snapshot.data['filter'];
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
