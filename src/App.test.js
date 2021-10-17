import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('renders page header', () => {
  render(<App />);
  const header = screen.getByText(/Tracking our progress - Test!/i);
  expect(header).toBeInTheDocument();
})
