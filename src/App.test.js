import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText('SHOP NOW');
  linkElements.forEach(el => expect(el).toBeInTheDocument())
});
