import { Action } from '@ngrx/store';

export const ADD_TODO        = '[Main] Add Todo';
export const TOGGLE_TODO     = '[Main] Toggle Todo';
export const REMOVE_COMPLETE = '[Main] Remove Completed';
export const DELETE_TODO     = '[Main] Delete Todo';

export function addTodo(todoDescription: string) {
  return {
    type: ADD_TODO,
    payload: todoDescription
  }
}

export class AddAction implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: string) { }
}

export function toggleTodo(todoID: number) {
  return {
    type: TOGGLE_TODO,
    payload: todoID
  }
}

export class ToggleAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: number) { }
}

export function removeCompleted() {
  return {
    type: REMOVE_COMPLETE
  }
}

export class RemoveCompleted implements Action {
  readonly type = REMOVE_COMPLETE;
}

export function deleteTodo(todoID: number) {
  return {
    type: DELETE_TODO,
    payload: todoID
  }
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: number) { }
}

export type Actions = AddAction | ToggleAction | RemoveCompleted | DeleteTodo;
