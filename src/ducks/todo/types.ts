export type Action = {
  type: string,
  [propName: string]: any
};

export type AddTodo = {
  type: string,
  value: string,
  id: string
};
