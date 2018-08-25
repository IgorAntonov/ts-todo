import { Todo as TodoType } from './store';

export const loadTodos = (): TodoType[] => {
  try {
    const serializedTodos = localStorage.getItem('todos');
    if (serializedTodos === null) {
      return [];
    }
    return JSON.parse(serializedTodos);
  } catch (err) {
    return [];
  }
};

export const saveTodos = (todos: TodoType[]): void => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem('todos', serializedTodos);
    return undefined;
  } catch (err) {
    return undefined;
  }
};
