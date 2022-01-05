import { render } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext.jsx';

it('should display App view on the screen', () => {
  const { container } = render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );

  expect(container).toMatchSnapshot();
});
