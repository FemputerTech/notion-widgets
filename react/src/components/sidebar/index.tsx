import React from 'react';
import ClickableListItem from './ClickableListItem';
import './sidebar.scss';

interface SidebarProps {
  listItems: {
    id: string;
    name: string;
  }[];
  setItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const Sidebar: React.FC<SidebarProps> = ({ listItems, setItem }) => {
  const handleItemClick = (itemId: string) => {
    setItem(itemId);
  };

  return (
    <div className='sidebar'>
      <div>Notion Widgets</div>
      <ul className='sidebar__list'>
        {listItems.map((item) => (
          <ClickableListItem
            key={item.id}
            id={item.id}
            title={item.name}
            onClick={handleItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
