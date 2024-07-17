import React, { useState } from 'react';

function Todo() { // Corrected function name to Todo
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      completed: false // Add completed property
    };
    setList([...list, newTodo]);
    setInput('');
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const toggleComplete = (id) => {
    const newList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setList(newList);
  };

  return (
    <div>
      <h1>Pule's To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.todo}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
