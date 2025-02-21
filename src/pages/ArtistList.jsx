import React from 'react';
import ArtistCard from './ArtistCard';
import '../style/ArtistList.css';

const ArtistList = ({ artists, onArtistSelect, isTrending }) => {
  return (
    <div className="artist-list">
      {isTrending && <h2>Artistas em Tendência</h2>}
      {artists.length === 0 ? (
        <p>Nenhum artista encontrado.</p> // Show a message if no artists are found
      ) : (
        artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} onSelect={onArtistSelect} /> // Render each artist card
        ))
      )}
    </div>
  );
};

export default ArtistList;
