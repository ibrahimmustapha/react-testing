import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  // * renders react component
  render(<App />);

  // * screen.getByText finds the element by its text content
  const paraElement = screen.getByText(/React JavaScript/i)

  // * checks if getByText content is in the document object
  expect(paraElement).toBeInTheDocument()
});
