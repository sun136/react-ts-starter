import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/程获取anymock用户信息/i);
  expect(linkElement).toBeInTheDocument();
});
