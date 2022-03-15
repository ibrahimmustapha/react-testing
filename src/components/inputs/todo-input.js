import React,  { useState } from 'react' 
import TodoList from '../lists/todo-list'
import './style.css'

// todo component 
const TodoInput = () => {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([
        {
            id: 1,
            task: 'Hey there I am your default todo'
        }
    ])

    // add new task to todo-list 
    const addTodo = task => {
        const newTodo = [...todos, { task }]
        setTodos(newTodo)
    }

    // handle to submission
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add new todo here"
            value={value}
            onChange={e => setValue(e.target.value)}/>
            <button type="submit">Add Todo</button>
            </form>
            
            {/* List all todos here */}
            {todos.map(todo => {
                return <TodoList key={todo.id + 1} task={todo.task} />
            })}
        </div>
    )
}

export default TodoInput