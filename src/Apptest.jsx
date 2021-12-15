import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should display App view on the screen', () => {
  const { container } = render(<App />);

  screen.debug();

  expect(container).toMatchSnapshot();
});
