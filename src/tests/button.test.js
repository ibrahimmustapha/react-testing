// importing react-testing methods 
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// importing button component
import Button from '../components/button'

// cleaning up after each test not after all tests
afterEach(cleanup)

describe('Button Component Tests', () => {
    test('theme changes successfully', () => {
        
        // render button component
        render(<Button />)

        // * button element should contain "The Current Theme"
        const btnElement = screen.getByText(/The Current Theme/i)
    
        // If a user click a button
        userEvent.click(btnElement)
    
        // content of button element must change to The Current Theme  dark
        expect(btnElement).toHaveTextContent(/The Current Theme dark/i)
    })
})

// cleaning up after all test
afterAll(cleanup)