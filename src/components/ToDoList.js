import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const nuevasCosas = [todo, ...todos];

    setTodos(nuevasCosas);
  };

  const updateTodo = (todoId, nuevoValor) => {
    if (!nuevoValor.text || /^\s*$/.test(nuevoValor.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? nuevoValor : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>ToDo App -> Christopher Ortiz Portales Web 2</h1>
      <h2>¿Qué vas a hacer hoy?</h2>
      <ToDoForm onSubmit={addTodo} />
      <ToDo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
