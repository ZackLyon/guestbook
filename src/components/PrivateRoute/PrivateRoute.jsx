import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useHistory } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const history = useHistory();

  return <Route> {user ? children : history.replace('/login')} </Route>;
}
