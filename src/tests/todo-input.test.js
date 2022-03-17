// importing react-testing methods 
import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoInput from '../components/inputs/todo-input'

afterEach(cleanup)

// Use the describe block group a number of related test together
describe('Todo Input Tests', () => {
    test('renders todo list', () => {
        render(<TodoInput />)
        
        const addTodoBtn = screen.getByText(/Add Todo/i)
    
        userEvent.click(addTodoBtn)
    
        expect(addTodoBtn).toHaveTextContent(/Add Todo/i)
    })
    
    test('number of todos work properly', () => {
        render(<TodoInput />)
        
        const addtodoBtn = screen.getByText(/Add Todo/i)
    
        userEvent.click(addtodoBtn)
    
        const todoFooterParagraph = screen.getByText(/No of Todos: 1/i)
    
        expect(todoFooterParagraph).toBeInTheDocument()
    })
})

afterAll(cleanup)