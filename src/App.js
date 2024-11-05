import React from 'react';
import ScratchClone from './ScratchClone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ScratchClone />
    </DndProvider>
  );
}

export default App;
