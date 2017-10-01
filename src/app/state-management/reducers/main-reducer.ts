import { ActionReducer, Action } from '@ngrx/store';
import { State, initialState } from '../state/main-state';
import { ADD_TODO, TOGGLE_TODO, REMOVE_COMPLETE, DELETE_TODO } from '../actions/main-action-creator';
import { Todo } from '../../model/todo';

export function mainReducer(state: State = initialState, action: Action) {
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
            const todoList: Todo[] = state.todoList.filter (
                todo => todo.completed === false
            );

            return {
                ...state,
                todoList: todoList
            }
        }

        case DELETE_TODO: {
          const idToDelete: number = action.payload;
          const todoList: Todo[] = state.todoList.map (
              (todo) => todo.id === idToDelete ? null
                                               : todo
          );

          return  {
            ...state,
            todoList: todoList
          }
        }

        default: {
            return state;
        }

    }
}
