import { render } from '@testing-library/react';
import Login from './Login';
import { AuthProvider } from '../../context/AuthContext.jsx';

it('should display Login view on the screen', () => {
  const { container } = render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );

  expect(container).toMatchSnapshot();
});
