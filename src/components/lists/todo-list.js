import React from 'react'
import './style.css'

const TodoList = (props) => {
    return (
        <div className="todo-container">    
        <div className="todo-list" >{props.task}</div>
        </div>
    )
}

export default TodoList