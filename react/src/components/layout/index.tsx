import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar';
import Header from '../header';
import { widgets } from '../widgets';
import './layout.scss';

const Layout: React.FC = () => {
  const [selectedWidgetId, setSelectedWidgetId] = useState<string | null>(null);

  const selectedWidget = widgets.find(
    (widget) => widget.id === selectedWidgetId
  );

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
        {selectedWidget && (
          <>
            <Link to={`/widgets/${selectedWidget.id}`}>Copy Link</Link>
            <selectedWidget.component />
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
