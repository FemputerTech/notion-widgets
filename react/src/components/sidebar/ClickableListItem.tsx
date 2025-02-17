import React from 'react';

interface ClickableListItemProps {
  title: string;
  onClick: (title: string) => void;
}

const ClickableListItem: React.FC<ClickableListItemProps> = ({
  title,
  onClick,
}) => {
  return (
    <li className='clickable-list-item' onClick={() => onClick(title)}>
      {title}
    </li>
  );
};

export default ClickableListItem;
