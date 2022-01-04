import { render } from '@testing-library/react';
import Home from './Home';
import { UserProvider } from '../../context/UserContext.jsx';

it('should display Home view on the screen', () => {
  const { container } = render(
    <UserProvider>
      <Home />
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
