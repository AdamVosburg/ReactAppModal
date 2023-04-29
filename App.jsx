import React, { useState } from 'react';
import InsiderAcceptModal from './InsiderAcceptModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <InsiderAcceptModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;