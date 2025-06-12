import React from 'react';

function Main({ children }) {
  return (
    <main>
      <section>
        <h2>Reserva una mesa</h2>
        <button>Reservar</button>
      </section>
      <section>
        <h2>Especiales de la semana</h2>
        {/* Aquí puedes agregar tarjetas de platos luego */}
      </section>
      <section>
        <h2>Testimonios</h2>
        {/* Aquí pueden ir reseñas de clientes */}
      </section>
      <section>
        <h2>Acerca de nosotros</h2>
        <p>Somos Adrian y Mario...</p>
      </section>
        {children}
    </main>
  );
}

export default Main;


// This code defines the main content area of a React application.
// It includes sections for table reservations, weekly specials, customer testimonials, and an "About Us" section.