import { Todo } from '../../model/todo';

export interface AppState {
  main: {
    nextID: number;
    todoList: Todo[];
  }
}
