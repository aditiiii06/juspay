import React from 'react';
import { useDrag } from 'react-dnd';

const ActionBlock = ({ action }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ACTION',
    item: { action },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        padding: '10px',
        backgroundColor: '#9bc3e1',
        borderRadius: '4px',
        cursor: 'pointer',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {action.label}
    </div>
  );
};

export default ActionBlock;
