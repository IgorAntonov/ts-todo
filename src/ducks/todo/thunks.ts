import * as uuid from 'uuid';
import { Dispatch } from 'redux';

import { saveTodos } from 'Src/local-storage';
import { StoreState } from 'Src/store';
import { actions } from './actions';


export const addTodo = (value: string) => (dispatch: Dispatch, getState: () => StoreState) => {
  const id = uuid();
  dispatch(actions.addTodo(value, id));
  saveTodos(getState().todos);
};

export const deleteTodo = (id: string) => (dispatch: Dispatch, getState: () => StoreState) => {
  dispatch(actions.deleteTodo(id));
  saveTodos(getState().todos);
};
