import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentForm from './components/ContentForm';
import HomeScreen from './components/HomeScreen';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/add-content" element={<ContentForm />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
