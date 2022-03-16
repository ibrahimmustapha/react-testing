import React from 'react'
import './style.css'

const TodoList = ({task}) => {
    return (
        <div className="todo-container">    
        <div className="todo-list" >{task}</div>
        </div>
    )
}

export default TodoList