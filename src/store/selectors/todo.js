
const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store)?.byIds || [];

export const todosSelector = (store) =>
  todoIdsSelector(store);