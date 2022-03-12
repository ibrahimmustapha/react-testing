import { render, screen } from '@testing-library/react'
import Layout from '../components/layout'

test('renders layout component correctly', () => {
    render(<Layout />)
    screen.debug()
})