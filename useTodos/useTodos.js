import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  const handleTodosCount = () => {
    return todos.filter(todo => !todo.done ).length;
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: handleTodosCount(),
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
  };

};
