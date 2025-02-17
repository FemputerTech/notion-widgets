import React, { useState } from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import { widgets } from '../widgets';
import './layout.scss';

const Layout: React.FC = () => {
  const [selectedWidgetId, setSelectedWidgetId] = useState<string | null>(null);

  const SelectedWidgetComponent = widgets.find(
    (widget) => widget.id === selectedWidgetId
  )?.component;

  return (
    <div className='layout'>
      <Sidebar
        listItems={widgets.map((widget) => ({
          id: widget.id,
          name: widget.name,
        }))}
        setItem={setSelectedWidgetId}
      />
      <Header />
      <div className='main'>
        {SelectedWidgetComponent && <SelectedWidgetComponent />}
      </div>
    </div>
  );
};

export default Layout;
