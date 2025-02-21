import React from 'react';
import '../style/SuccessScreen.css'

const SuccessScreen = ({ onReset }) => {
  return (
    <div className="success-screen">
      <h2>Contratação realizada com sucesso!</h2>
      <p>Sua contratação foi graavada com sucesso!</p>
      <button onClick={onReset} className='button'>Contratar outro artista</button> {/* Call onReset function when button is clicked */}
    </div>
  );
};

export default SuccessScreen;
