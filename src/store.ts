import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './ducks';

const logger = createLogger({ collapsed: true });
const middlewares = [thunkMiddleware, logger];

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

type Todo = {
  id: number,
  value: string,
  isDone: boolean
};

export interface StoreState {
  todos: Todo[]
}
