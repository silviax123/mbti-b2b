import React from 'react';
import './container.css';

interface AnimalWithContainerProps {
  children: React.ReactNode;
}

const AnimalWithContainer: React.FC<AnimalWithContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default AnimalWithContainer;
