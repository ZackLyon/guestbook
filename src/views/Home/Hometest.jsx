import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { useUser } from '../../context/UserContext.jsx';

it('should display Home view on the screen', async () => {
  const { container } = await render(<Home />);

  screen.debug();

  expect(container).toMatchSnapshot();
});
