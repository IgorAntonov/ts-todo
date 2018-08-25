import { AddTodo } from './types';

export const types = {
  add: 'todo/ADD'
};

export const actions = {
  addTodo: (value: string, id: string): AddTodo => ({
    type: types.add,
    value,
    id
  })
};
