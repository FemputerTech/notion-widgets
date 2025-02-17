import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ButtonWidget, WindowWidget } from './components/widgets';
import Layout from './components/layout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/button-widget' element={<ButtonWidget />} />
        <Route path='/window-widget' element={<WindowWidget />} />
        <Route path='/' element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
