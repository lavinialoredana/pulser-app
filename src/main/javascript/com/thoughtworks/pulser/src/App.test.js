import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pulser Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pulser/i);
  expect(linkElement).toBeInTheDocument();
});
