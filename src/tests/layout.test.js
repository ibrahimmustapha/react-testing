import { act, render, screen } from '@testing-library/react'
import Layout from '../components/layout'

const name = "Ibrahim"
test('renders with a name', () => {
    /* 
    * act is a helper that makes sure all updates related unit tests have 
    *  been processed and applied to the DOM before making assertions
    */
    act(() => {
        render(<Layout firstname={name} />)
    })
    const firstname = screen.getByText(/Ibrahim/i)

    // assertions/submissions
    expect(firstname).toHaveTextContent(/Ibrahim/i)
})