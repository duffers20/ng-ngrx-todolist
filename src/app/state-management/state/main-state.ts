import { Todo } from '../../model/todo';

export interface State {
    nextID: number;
    todoList: Todo[];
}

export const initialState: State = {
    nextID: 0,
    todoList: []
};
