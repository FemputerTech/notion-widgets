import React from 'react';

interface ClickableListItemProps {
  id: string;
  title: string;
  onClick: (title: string) => void;
}

const ClickableListItem: React.FC<ClickableListItemProps> = ({
  id,
  title,
  onClick,
}) => {
  return (
    <li className='clickable-list-item' onClick={() => onClick(id)}>
      {title}
    </li>
  );
};

export default ClickableListItem;
