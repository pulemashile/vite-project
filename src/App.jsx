
import { useState } from 'react';
import "./App.css"

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput('');
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
      
  return (
    <>
      <div >
        <h1>Pule's To-Do List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}style={{border:"3px solid black"}}
        />
        <button onClick={() => addTodo(input)}style={{ borderBottom: '3px solid black', color: 'aqua'}}>Add</button>  
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}style={{ marginLeft: '10px', color: 'red'}}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

