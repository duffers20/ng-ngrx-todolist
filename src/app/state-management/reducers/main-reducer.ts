import { ActionReducer, Action } from '@ngrx/store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_COMPLETE, DELETE_TODO } from '../actions/main-action-creator';
import * as todos from '../actions/main-action-creator';
import { Todo } from '../../model/todo';

interface MainState {
  nextID: number;
  todoList: Todo[];
  todosRemaining: number;
}

const initialMainState: MainState = {
  nextID: 0,
  todoList: [],
  todosRemaining: 0
}

export function mainReducer(state: MainState = initialMainState, action: todos.Actions) {
    switch (action.type) {

        case ADD_TODO: {
          const newId: number = state.nextID;
          const newTodo: Todo = {
              id: newId,
              description: action.payload,
              completed: false
          };

          return {
              ...state,
              todoList: [...state.todoList, newTodo],
              nextID: newId + 1,
              todosRemaining: state.todosRemaining + 1
          }
        }

        case TOGGLE_TODO: {
          const idToToggle: number = action.payload;
          const todoList: Todo[] = state.todoList.map (
              (todo) => todo.id === idToToggle ? {...todo, completed: !todo.completed}
                                    : todo
          );

          return {
              ...state,
              todoList: todoList,
              todosRemaining: todoList.filter(todo => todo.completed === false).length
          }
        }

        case REMOVE_COMPLETE: {
          const todoList: Todo[] = state.todoList.filter (
            todo => todo.completed === false
          );

          return {
            ...state,
            todoList: todoList,
            todosRemaining: todoList.filter(todo => todo.completed === false).length
          }
        }

        case DELETE_TODO: {
          const todoList: Todo[] = state.todoList.filter (
            todo => todo.id !== action.payload
          );

          return  {
            ...state,
            todoList: todoList,
            todosRemaining: todoList.filter(todo => todo.completed === false).length
          }
        }

        default: {
            return state;
        }

    }
}
