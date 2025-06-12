import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservas" element={<Reservations />} />
          <Route path="/pedidos" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
// This code sets up a React application with routing using React Router.
// This code is a simple React application structure that includes a header, navigation, main content, and footer.