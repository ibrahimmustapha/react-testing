// importing react-testing methods 
import { act, cleanup, render, screen } from '@testing-library/react'
import Header from '../components/header'

afterEach(cleanup)

test('header component renders correctly with custom props', () => {
    act(() => {
        render(<Header title="Todo App" />)
    })

    const headerElement = screen.getByText(/Todo App/i)

    expect(headerElement).toBeInTheDocument()
})

// * GETBY_ROLE 

test('renders header component if there is a heading tag',  () => {
    act(() => {
        render(<Header title="Todo App" />)
    })

    // checks if theres a heading tag with the text "Todo App" in the Header component
    const headerElement = screen.getByRole("heading", { name: "Todo App"})

    expect(headerElement).toBeInTheDocument()
})

// * GET TESTID

test('renders correctly if theres is a match with the testid provided', () => {
    act(() => {
        render(<Header title="Todo App" />)
    })

    const headerElement = screen.getByTestId("header-001")

    expect(headerElement).toBeInTheDocument()
})

// * FIND BY PS: FIND BY QUERIES ARE ASYNCHRONOUS

test('renders correctly if theres is a match with the testid provided', async () => {
    act(() => {
        render(<Header title="Todo App" />)
    })

    const headerElement = await screen.findByText(/Todo App/i)

    expect(headerElement).toBeInTheDocument()
})

// * QUERY BY 


afterAll(cleanup)

/*
* 10110733@student.upsa.edu.gh
* Password2
*/