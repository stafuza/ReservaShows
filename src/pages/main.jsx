import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../style/index.css';
import App from './App';
import BookingForm from './BookingForm';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  </StrictMode>,
);