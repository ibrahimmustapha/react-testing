import { render, screen } from '@testing-library/react'
import Layout from '../components/layout'

const name = "Ibrahim"

describe('Layout Component Tests', () => {
    test('renders with a name', () => {
        render(<Layout firstname={name} />)
        
        const firstname = screen.getByText(/Ibrahim/i)
    
        // assertions/submissions
        expect(firstname).toHaveTextContent(/Ibrahim/i)
    })
})