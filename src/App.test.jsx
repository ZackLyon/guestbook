import { render } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext.jsx';

it('should display App view on the screen', () => {
  const { container } = render(
    <UserProvider>
      <App />
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
