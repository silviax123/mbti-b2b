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
    <div className="content-container">
      <h1>zhege</h1>
      <img src={ImgTitleUp} alt='img-title-up' className='container-with-title-up'/>
      <div className='container-with-title-mid'>
        {children}
      </div>
      <img src={ImgTitleDown} alt='img-title-down'className='container-with-title-down'/>
      

    </div>
  );
};

export default ContainerWithTitle;