import React, { useState, useEffect } from 'react';
import "../App.css"; // Ensure you import the CSS file

function Todo() {
  const [list, setList] = useState(() => {
    // Initialize state from local storage
    const savedList = localStorage.getItem('todoList');
    return savedList ? JSON.parse(savedList) : [];
  });
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low'); // Default to Low priority

  // Update local storage whenever the list changes
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);

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
    <div className='form'>
    <div className='register'>
      <h1 className='title'>Pule's To-Do List</h1>
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select className='priority'
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={() => addTodo(description, priority)} className='add'>Add</button>
     
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <input className='checkbox'
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
            <button onClick={() => deleteTodo(todo.id)} className='delete'>delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Todo;
