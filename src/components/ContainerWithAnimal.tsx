import React from 'react';
import './container.css';

interface AnimalWithContainerProps {
  children: React.ReactNode;
}

const AnimalWithContainer: React.FC<AnimalWithContainerProps> = ({ children }) => {
  return (
    <div className="container-with-animal">
      {children}
    </div>
  );
};

export default AnimalWithContainer;
