import { AddTodo, DeleteTodo } from './types';

export const types = {
  add: 'todo/ADD',
  delete: 'todo/DELETE'
};

export const actions = {
  addTodo: (value: string, id: string): AddTodo => ({
    type: types.add,
    value,
    id
  }),
  deleteTodo: (id: string): DeleteTodo => ({
    type: types.delete,
    id
  })
};
