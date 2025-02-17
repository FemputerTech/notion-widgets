import React, { useState } from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import * as Widgets from '../widgets';
import './layout.scss';

{
  /* <Link
to={`/widgets/${name.toLowerCase()}`}

>
{name} 
</Link>*/
}

const Layout: React.FC = () => {
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null);
  const widgets = Object.keys(Widgets);
  const widgetNames = widgets.map((widget) => widget.replace('Widget', ''));

  console.log(selectedWidget);
  return (
    <div className='layout'>
      <Sidebar listItems={widgetNames} setItem={setSelectedWidget} />
      <Header />
      <div className='main'>Main</div>
    </div>
  );
};

export default Layout;
