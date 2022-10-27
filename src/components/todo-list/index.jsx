import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo.js";
import { Todo } from "../todo";
import { filterTodo } from "../../store/actions/creators/todo";
import { useDispatch } from "react-redux";

import styles from './index.module.css';

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const filterTodoItem = () => {
    dispatch(filterTodo());
  }
  console.log(todos)
  return (
    <div>
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
    <button className={styles.button} onClick={filterTodoItem}>{"FILTER"}</button>
    </div>
  );
};