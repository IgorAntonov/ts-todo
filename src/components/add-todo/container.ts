import { connect } from 'react-redux';

import { addTodo } from 'Src/ducks/todo';
import { AddTodo } from './add-todo';

export const container = connect(null, { addTodo })(AddTodo);
