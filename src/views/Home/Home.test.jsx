import { render } from '@testing-library/react';
import Home from './Home';
import { AuthProvider } from '../../context/AuthContext.jsx';

it('should display Home view on the screen', () => {
  const { container } = render(
    <AuthProvider>
      <Home />
    </AuthProvider>
  );

  expect(container).toMatchSnapshot();
});
