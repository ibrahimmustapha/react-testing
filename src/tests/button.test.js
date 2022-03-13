import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../components/button'

afterEach(cleanup)

    test('theme changes successfully', () => {
        act(() => {
            render(<Button />)
        })
        // * button element should contain "The Current Theme"
        const btnElement = screen.getByText(/The Current Theme/i)
    
        // If a user click a button
        userEvent.click(btnElement)
    
        // content of button element must change to The Current Theme  dark
        expect(btnElement).toHaveTextContent(/The Current Theme dark/i)
    })