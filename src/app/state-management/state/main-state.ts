import { Todo } from '../../model/todo';

export interface State {
    nextID: number;
    todoList: Todo[];
}

export const initialState: State = {
    nextID: 1,
    todoList: [{id: 0, description: 'AAA', completed: false}] // temporarily added for debugging
};
