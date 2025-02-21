import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ArtistList from './ArtistList';
import BookingForm from './BookingForm';
import SuccessScreen from './SuccessScreen';
import PreviousBookings from './PreviousBookings';
import fetchArtists from './fetchArtists';
import '../style/App.css';

const App = () => {
  const [artists, setArtists] = useState([]); //State to store the list of fetched artists
  const [selectedArtist, setSelectedArtist] = useState(null); //State to track the currently selected artist
  const [bookingSuccess, setBookingSuccess] = useState(false); //State to determine if the booking process was successful
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (!query) {
      setArtists([]);
      return;
    }

    try {
      const fetchedArtists = await fetchArtists(query);
      setArtists(fetchedArtists);
    } catch (error) {
      console.error('Erro ao buscar artistas:', error);
      alert('Ocorreu um erro ao buscar artistas. Tente novamente.');
    }
  };

  const handleBookingSubmit = (bookingData) => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(bookingData); //Function to handle booking form submission and save the booking to local storage
    localStorage.setItem('bookings', JSON.stringify(bookings));
    setBookingSuccess(true);
  };

  return (
    <div className="app">
      {!bookingSuccess ? (
        <>
          <SearchBar onSearch={handleSearch} />
          <div className="content">
            <ArtistList artists={artists} onArtistSelect={setSelectedArtist} />
            {selectedArtist && (
              <BookingForm artist={selectedArtist} onSubmit={handleBookingSubmit} />
            )}
          </div>
          <PreviousBookings />
        </>
      ) : (
        <SuccessScreen onReset={() => setBookingSuccess(false)} /> //Component to display a success message after booking, with a reset option
      )}
    </div>
  );
};

export default App;
