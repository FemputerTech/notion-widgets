import React, { useState } from 'react';
import ClickableListItem from './ClickableListItem';
import './sidebar.scss';

interface SidebarProps {
  listItems: string[];
  setItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const Sidebar: React.FC<SidebarProps> = ({ listItems, setItem }) => {
  const handleItemClick = (item: string) => {
    setItem(item);
  };

  return (
    <div className='sidebar'>
      <div>Notion Widgets</div>
      <ul className='sidebar__list'>
        {listItems.map((item) => (
          <ClickableListItem
            key={item}
            title={item}
            onClick={handleItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
