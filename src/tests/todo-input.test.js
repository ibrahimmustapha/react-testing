// importing react-testing methods 
import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoInput from '../components/inputs/todo-input'

afterEach(cleanup)

test('renders todo list', () => {
    render(<TodoInput />)
    
    const addTodoBtn = screen.getByText(/Add Todo/i)

    userEvent.click(addTodoBtn)

    expect(addTodoBtn).toHaveTextContent(/Add Todo/i)
})

afterAll(cleanup)