import React,  { useState } from 'react' 
import TodoList from '../lists/todo-list'
import './style.css'

// todo component 
const TodoInput = () => {
    const [value, setValue] = useState("")
    const [todofooter, setTodoFooter] = useState(1)
    const [todos, setTodos] = useState([
        {
            id: 0,
            task: 'Hey there I am your default todo',
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
            <button type="submit" onClick={() => setTodoFooter(!value ? todofooter + 0 : todofooter + 1)}>Add Todo</button>
            </form>
            
            {/* List all todos here */}
            {todos.map(todo => {
                return <TodoList key={todo.key + 1} task={todo.task} />
            })}

            <p className="todo-footer">No of Todos: {todofooter}</p>
        </div>
    )
}

export default TodoInput