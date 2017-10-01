export const ADD_TODO = '[Main] Add Todo';
export const TOGGLE_TODO = '[Main] Toggle Todo';
export const REMOVE_COMPLETE = '[Main] Remove Completed';
export const DELETE_TODO = '[Main] Delete Todo';

export function addTodo(todoDescription: string) {
  return {
    type: ADD_TODO,
    payload: todoDescription
  }
}

export function toggleTodo(todoID: number) {
  return {
    type: TOGGLE_TODO,
    payload: todoID
  }
}

export function removeCompleted() {
  return {
    type: REMOVE_COMPLETE
  }
}

export function deleteTodo(todoID: number) {
  return {
    type: DELETE_TODO,
    payload: todoID
  }
}
