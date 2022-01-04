import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './views/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}
