import React from 'react';
import Sidebar from '../sidebar';
import './layout.scss';

const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <Sidebar />
    </div>
  );
};

export default Layout;
