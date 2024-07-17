import React, { useState } from 'react';
import "../App.css"; // Ensure you import the CSS file

function Todo() {
  const [list, setList] = useState([]);
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low'); // Default to Low priority

  const addTodo = (description, priority) => {
    const newTodo = {
      id: Math.random(),
      description: description,
      priority: priority,
      completed: false,
    };
    setList([...list, newTodo]);
    setDescription(''); // Clear the description input
    setPriority('Low'); // Reset priority to Low
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
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={() => addTodo(description, priority)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.description} 
            </span>
            <span className={`${todo.priority.toLowerCase()}-priority`}>
              ({todo.priority})
            </span>
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
