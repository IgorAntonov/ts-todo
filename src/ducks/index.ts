import { combineReducers } from 'redux';

import { reducer as todos } from './todo';

export const rootReducer = combineReducers({
  todos
});
