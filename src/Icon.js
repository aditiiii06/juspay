import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const IconContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Icon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const [, drop] = useDrop({
    accept: 'ACTION',
    drop: (item) => handleAction(item.action),
  });

  const handleAction = (action) => {
    switch (action.type) {
      case 'move':
        setPosition((prev) => ({ ...prev, x: prev.x + action.value }));
        break;
      case 'rotate':
        setRotation((prev) => prev + action.value);
        break;
      case 'glide':
        setPosition({ x: action.x, y: action.y });
        break;
      default:
        break;
    }
  };

  return (
    <IconContainer
      ref={drop}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
      }}
    >
      <IconImage src={`${process.env.PUBLIC_URL}/CAT_ICON.png`}  alt="Scratch Cat" />
    </IconContainer>
  );
};

export default Icon;
