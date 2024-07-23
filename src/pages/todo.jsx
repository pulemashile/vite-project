import React, { useState, useEffect, useRef } from 'react';
import "../App.css";
import { RiAddLine, RiDeleteBin7Line, RiPencilLine, RiSaveLine } from '@remixicon/react'

function Todo() {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem('todoList');
    return savedList ? JSON.parse(savedList) : [];
  });
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTodos = list.filter((todo) =>
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    const editingTodo = list.find((todo) => todo.id === id);
    setDescription(editingTodo.description);
    setPriority(editingTodo.priority);
    setEditing(true);
    setEditingId(id);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();

    // Update the edited todo item in the list
    setList((prevList) =>
      prevList.map((todo) =>
        todo.id === editingId ? { ...todo, description, priority } : todo
      )
    );

    setEditing(false);
    setEditingId(null);
    setDescription('');
    setPriority('Low');
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

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
    setDescription('');
    setPriority('Low');
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
    <div className="form">
      <div className="register">
        <h1 className="title">Pule's To-Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
        </div>
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ref={inputRef}
        />
        <select
          className="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          onClick={() => {
            if (editing) {
              handleInputSubmit(event);
            } else {
              if (description !== '') {
                addTodo(description, priority);
              } else {
                console.log('Description cannot be empty');
              }
            }
          }}
          className="add"
        >
          {editing ? <RiSaveLine /> : <RiAddLine />}
        </button>

        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              <div style={{ display: 'flex' }}>
                <input
                  className="checkbox"
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
                <div style={{ display: 'flex' }}>
                  <button onClick={() => deleteTodo(todo.id)} className="delete">
                    <RiDeleteBin7Line />
                  </button>
                  <button onClick={() => handleEdit(todo.id)} className="edit">
                    <RiPencilLine />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;