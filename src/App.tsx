import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Components from './pages/Components';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
