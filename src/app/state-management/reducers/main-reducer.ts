import { ActionReducer, Action } from '@ngrx/store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_COMPLETE, DELETE_TODO } from '../actions/main-action-creator';
import * as todos from '../actions/main-action-creator';
import { Todo } from '../../model/todo';

interface MainState {
  nextID: number;
  todoList: Todo[];
}

const initialMainState: MainState = {
  nextID: 0,
  todoList: []
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
                nextID: newId + 1
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
                todoList: todoList
            }
        }

        case REMOVE_COMPLETE: {
            return {
              ...state,
              todoList: state.todoList.filter (
                todo => todo.completed === false
              )
            }
        }

        case DELETE_TODO: {
          return  {
            ...state,
            todoList: state.todoList.filter (
              todo => todo.id !== action.payload
            )
          }
        }

        default: {
            return state;
        }

    }
}
