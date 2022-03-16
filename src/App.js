import React from 'react';
import './App.css';
import TodoInput from './components/inputs/todo-input'
import Header from './components/header'

function App() {
  return (
    <div className="App"> 
      <Header title="React Todo App" />
      <TodoInput />
    </div>
  )
}

export default App;
