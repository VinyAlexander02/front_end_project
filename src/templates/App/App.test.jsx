import { render, screen } from '@testing-library/react';
import Home from './templates/App/App';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});