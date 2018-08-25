import { connect } from 'react-redux';

import { deleteTodo } from 'Src/ducks/todo';
import { Todo } from './todo';

export const container = connect(null, { deleteTodo })(Todo);
