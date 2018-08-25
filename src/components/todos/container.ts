import { connect } from 'react-redux';

import { getAllTodos } from 'Src/ducks/todo';
import { StoreState } from 'Src/store';
import { Todos } from './todos';

const mapStateToProps = (state: StoreState) => ({
  todos: getAllTodos(state)
});

export const container = connect(mapStateToProps)(Todos);
