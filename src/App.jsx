import { UserProvider } from './context/UserContext';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './views/Home/Home';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <UserProvider>
        <Header />
        <Home />
        <Footer />
      </UserProvider>
    </div>
  );
}
