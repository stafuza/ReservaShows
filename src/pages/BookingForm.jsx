import React, { useState } from 'react';
import '../style/BookingForm.css'

const BookingForm = ({ artist, onSubmit }) => {
  // State variables for booking form fields
  const [name, setName] = useState('');
  const [fee, setFee] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [time, setTime] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [distrrict, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [localName, setLocal] = useState('');

  // Handle form submission and send booking data to parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      name,
      artist: artist.name, // Include artist name in booking data
      fee,
      eventDate,
      time,
      country,
      state,
      city,
      distrrict,
      street,
      number,
      localName,
    };
    onSubmit(bookingData); // Trigger parent component's onSubmit function
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Contratar {artist.name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do Contrante*"
        required
      />
      <input
        type="number"
        value={fee}
        min="0"
        onChange={(e) => setFee(e.target.value)}
        placeholder="Cachê (ex: 10000,00)*"
        required
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <h4>Endereço do Evento</h4>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="País*"
        required
      />
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Estado*"
        required
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Cidade*"
        required
      />
      <input
        type="text"
        value={distrrict}
        onChange={(e) => setDistrict(e.target.value)}
        placeholder="Bairro*"
        required
      />
      <input
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        placeholder="Rua*"
        required
      />
      <input
        type="number"
        value={number}
        min="0"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Número"
      />
      <input
        type="text"
        value={localName}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Nome do Espaço"
      />
      <button type="submit">Concluir Contratação</button>
    </form>
  );
};

export default BookingForm;
