import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './ducks';
import { loadTodos } from './local-storage';

const logger = createLogger({ collapsed: true });
const middlewares = [thunkMiddleware, logger];

const initialState: StoreState = {
  todos: loadTodos()
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export type Todo = {
  id: string,
  value: string,
  isDone: boolean
};

export interface StoreState {
  todos: Todo[]
}
