import React from 'react';
import { Result } from '../types';
import './container.css';
import ImgTitleUp from '../assets/res3.png'
import ImgTitleMid from '../assets/res4.png'
import ImgTitleDown from '../assets/res5.png'

interface ContainerWithTitleProps {
  children: React.ReactNode
  // result: Result
}

const ContainerWithTitle: React.FC<ContainerWithTitleProps> = ({children}) => {
  return (
    <div className="whole-content-container">
      <img src={ImgTitleUp} alt='img-title-up' className='title-img-up'/>
      <div className='info-text'>
        <p>{children}</p>
      </div>
      <img src={ImgTitleDown} alt='img-title-down' className='title-img-down'/>
      

    </div>
  );
};

export default ContainerWithTitle;