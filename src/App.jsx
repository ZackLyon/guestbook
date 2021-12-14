import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import { UserProvider } from './context/UserContext.jsx';

export default function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        <Home />
        <Footer />
      </UserProvider>
    </div>
  );
}
