import * as React from 'react';
import List from '@material-ui/core/List';

import { Todo as TodoType } from 'Src/store';
import { Todo } from '../todo';

interface Props {
  todos: TodoType[]
}

export const Todos = ({ todos }: Props) => (
  <List>
    {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
  </List>
);
