import React, { useState } from 'react';
import styled from 'styled-components';
import ActionBlock from './ActionBlock';
import Icon from './Icon';

const ScratchCloneContainer = styled.div`
  display: flex;
  background-color: #f0f0f0;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #e0e0e0;
  padding: 20px;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WorkArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #ffffff;
`;

function ScratchClone() {
  const [actions] = useState([
    { id: 1, label: 'Move 10 Steps', type: 'move', value: 10 },
    { id: 2, label: 'Turn 15°', type: 'rotate', value: 15 },
    { id: 3, label: 'Glide to Random Position', type: 'glide', x: Math.random() * 200, y: Math.random() * 200 },
  ]);

  return (
    <ScratchCloneContainer>
      <Sidebar>
        <h3>Actions</h3>
        <ActionContainer>
          {actions.map((action) => (
            <ActionBlock key={action.id} action={action} />
          ))}
        </ActionContainer>
      </Sidebar>
      <WorkArea>
        <Icon />
      </WorkArea>
    </ScratchCloneContainer>
  );
}

export default ScratchClone;
