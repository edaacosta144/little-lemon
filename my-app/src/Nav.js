import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to="/pedidos">Pedidos en línea</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

// This code defines a simple navigation component for a React application.
// It includes links to various sections such as Home, About, Menu, Reservations, Online Orders, and Login.