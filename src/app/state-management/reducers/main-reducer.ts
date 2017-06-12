import { ActionReducer, Action } from '@ngrx/store';
import { State, initialState } from '../state/main-state';
import { ADD_TODO, TOGGLE_TODO } from '../actions/main-action-creator';
import { Todo } from '../../model/todo';

export const mainReducer: ActionReducer<State> = (
    state = initialState,
    action: Action
) => {
    switch (action.type) {

        case ADD_TODO: {
            const newId: number = state.todoList.length;
            const newTodo: Todo = {
                id: newId,
                description: action.payload,
                completed: false
            };

            return {
                ...state,
                todoList: [...state.todoList, newTodo],
                todosRemaining: state.todosRemaining++
            }
        }

        case TOGGLE_TODO: {
            const id: number = action.payload;

            return {
                ...state,
                todoList: state.todoList.map (
                    (todo, i) => i === id ? {...todo, completed: !todo.completed}
                                          : todo
                ),
                todosRemaining: state.todosRemaining--
            }
        }

        default: {
            return state;
        }

    }
}
