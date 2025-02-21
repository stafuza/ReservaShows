import React, { useEffect, useState } from 'react';
import '../style/PreviousBookings.css';

const PreviousBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    // Load stored bookings from localStorage when the component mounts
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleDelete = (index) => {
    // Remove the selected booking and update localStorage
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const handleViewDetails = (booking) => {
    // Display detailed information for the selected booking
    setSelectedBooking(booking);
  };

  const handleCloseDetails = () => {
    // Close the details view
    setSelectedBooking(null);
  };

  return (
    <div className="previous-bookings">
      <h2>Contratações anteriores</h2>
      {bookings.length === 0 ? (
        <p>Sem contratações anteriores.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index} className="booking-item">
              {booking.name} contratou: {booking.artist} para: {booking.eventDate} ás: {booking.time} em: {booking.country}
              <button onClick={() => handleViewDetails(booking)} className="view-details-button">Ver detalhes</button>
              <button onClick={() => handleDelete(index)} className="delete-button">Excluir</button>
            </li>
          ))}
        </ul>
      )}

      {selectedBooking && (
        <div className="booking-details">
          <h3>Detalhes da Contratação</h3>
          <p><strong>Nome do contratante:</strong> {selectedBooking.name}</p>
          <p><strong>Artista:</strong> {selectedBooking.artist}</p>
          <p><strong>Cachê:</strong> R${selectedBooking.fee}</p>
          <p><strong>Data do evento (Ano/Mês/Dia):</strong> {selectedBooking.eventDate}</p>
          <p><strong>Hora:</strong> {selectedBooking.time}</p>
          <p><strong>Endereço:</strong> {`${selectedBooking.country}, ${selectedBooking.state}, ${selectedBooking.city}, ${selectedBooking.distrrict}, ${selectedBooking.street}, ${selectedBooking.number}`}</p>
          <p><strong>Nome do Espaço:</strong> {selectedBooking.localName}</p>
          <button onClick={handleCloseDetails} className="close-details-button">Fechar</button>
        </div>
      )}
    </div>
  );
};

export default PreviousBookings;


/*import React, { useEffect, useState } from 'react';
import '../style/PreviousBookings.css';

const PreviousBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    // Load stored bookings from localStorage when the component mounts
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleDelete = (index) => {
    // Remove the selected booking and update localStorage
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const handleViewDetails = (booking) => {
    // Display detailed information for the selected booking
    setSelectedBooking(booking);
  };

  const handleCloseDetails = () => {
    // Close the details view
    setSelectedBooking(null);
  };

  return (
    <div className="previous-bookings">
      <h2>Contratações anteriores</h2>
      {bookings.length === 0 ? (
        <p>Sem contratações anteriores.</p> {/* Display message if no bookings are available *//*}
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index} className="booking-item">
              {/* Display basic booking details }
              {booking.name} contratou: {booking.artist} para: {booking.eventDate} ás: {booking.time} em: {booking.country}
              <button onClick={() => handleViewDetails(booking)} className="view-details-button">Ver detalhes</button>
              <button onClick={() => handleDelete(index)} className="delete-button">Excluir</button>
            </li>
          ))}
        </ul>
      )}

      {selectedBooking && (
        <div className="booking-details">
          <h3>Detalhes da Contratação</h3>
          {/* Display all details of the selected booking }
          <p><strong>Nome do contratante:</strong> {selectedBooking.name}</p>
          <p><strong>Artista:</strong> {selectedBooking.artist}</p>
          <p><strong>Cachê:</strong> R${selectedBooking.fee}</p>
          <p><strong>Data do evento (Ano/Mês/Dia):</strong> {selectedBooking.eventDate}</p>
          <p><strong>Hora:</strong> {selectedBooking.time}</p>
          <p><strong>Endereço:</strong> {`${selectedBooking.country}, ${selectedBooking.state}, ${selectedBooking.city}, ${selectedBooking.distrrict}, ${selectedBooking.street}, ${selectedBooking.number}`}</p>
          <p><strong>Nome do Espaço:</strong> {selectedBooking.localName}</p>
          <button onClick={handleCloseDetails} className="close-details-button">Fechar</button>
        </div>
      )}
    </div>
  );
};

export default PreviousBookings; */