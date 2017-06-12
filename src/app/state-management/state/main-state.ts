import { Todo } from '../../model/todo';

export interface State {
    todosRemaining: number;
    todoList: Todo[];
}

export const initialState: State = {
    todosRemaining: 0,
    todoList: []
};
