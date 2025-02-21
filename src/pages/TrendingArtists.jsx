import React, { useEffect, useState } from 'react';
import fetchArtists from './fetchArtists';
import ArtistCard from './ArtistCard';
import '../style/TrendingArtists.css'

const TrendingArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingArtists = async () => {
      try {
        const fetchedArtists = await fetchArtists();
        setArtists(fetchedArtists);
      } catch (err) {
        setError('Erro ao buscar artistas em alta.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingArtists();
  }, []);

  if (loading) {
    return <p>Carregando artistas em alta...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="trending-artists">
      <h2>Artistas em Alta</h2>
      <div className="artist-list">
        {artists.length === 0 ? (
          <p>Nenhum artista encontrado.</p>
        ) : (
          artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} onSelect={() => {}} className="artist-card" />
          ))
        )}
      </div>
    </div>
  );
};

export default TrendingArtists;