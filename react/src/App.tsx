import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ButtonWidget, WindowWidget } from './components/widgets';
import Layout from './components/layout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='widgets/button' element={<ButtonWidget />} />
        <Route path='widgets/window' element={<WindowWidget />} />
      </Routes>
    </Router>
  );
};

export default App;
