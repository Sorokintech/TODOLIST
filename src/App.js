import './App.css';
import { TodoList } from './components/todo-list';
import { AddTodo } from "./components/add-todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='to-do-box'>
          <AddTodo />
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;