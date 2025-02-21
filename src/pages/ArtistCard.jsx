import React from 'react';
import { motion } from 'framer-motion';
import '../style/ArtistCard.css';

const ArtistCard = ({ artist, onSelect }) => {
  return (
    <motion.div
      className="artist-card"
      onClick={() => onSelect(artist)} // Trigger selection when the card is clicked
      whileHover={{ scale: 1.05 }} // Add a hover animation
      transition={{ type: 'spring', stiffness: 300 }} // Smooth spring animation
    >
      <img src={artist.imageUrl} alt={artist.name} />
      <h3>{artist.name}</h3>
      <p>{artist.genre}</p>
    </motion.div>
  );
};

export default ArtistCard;
