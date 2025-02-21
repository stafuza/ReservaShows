import axios from 'axios';

const fetchArtists = async (query) => {
  const accessToken = 'BQD2XnpazN35AQy_BIRfWoT0NpmLw-udP9XFjTXZsgTP8n4eAOxPEb3ukJm2gAyD2LQB3GmcQ5fZyNAh68mp_6iPnncbYtdG0D07q48R94QxAuVuGccfyt6NrtKRrfUNePTUDPpiXcE'; // API token

  try {
    if (!query) {
      return []; // Return empty array if query is empty
    }

    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      params: {
        q: query,
        type: 'artist',
        limit: 12, // Limit the number of results to 12
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Pass the token in the header
      },
    });

    console.log('Artistas encontrados pela pesquisa:', response.data);
    // Map the response to extract necessary artist details
    return response.data.artists.items.map((artist) => ({
      id: artist.id,
      name: artist.name,
      imageUrl: artist.images[0]?.url || 'default-image-url.jpg', // Fallback for missing image
      genre: artist.genres.join(', ') || 'Gênero Desconhecido', // Fallback for missing genre
    }));
  } catch (error) {
    // Log and handle errors if the API call fails
    console.error('Erro ao buscar artistas: ', error.response ? error.response.data : error.message);
    return [];
  }
};

export default fetchArtists;
