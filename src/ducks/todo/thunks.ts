import * as uuid from 'uuid';
import { Dispatch } from 'redux';
import { actions } from './actions';

export const addTodo = (value: string) => (dispatch: Dispatch) => {
  const id = uuid();
  dispatch(actions.addTodo(value, id));
};
