import { StoreState } from 'Src/store';
import { types } from './actions';
import { Action } from './types';

const initialState: StoreState['todos'] = [];

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.add:
      return [
        ...state,
        {
          value: action.value,
          id: action.id,
          isDone: false
        }
      ];
    default:
      return state;
  }
};
