import './portfolios.css';
import { useState } from 'react';
import img from '../imgs/Halo.jpg';
import Load from '../Loading/loading';
import Grids from '../ImgGrid/Imgrid';
import { IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';



function App({onClick}) {

  return (
    <div className='Ti'>
      <h1>
        Select the portfolio
      </h1>
      <div className='Ports'>
          <div className='portafol'>
            <div className='box' onClick={() => onClick(3)}></div>
              <br></br>
              <h3>Portfolio: Oscar</h3>
            </div>
          <div className='portafol2'>
              <div className='box2'onClick={() => onClick(4)}></div>
              <br></br>
            <h3>Portfolio: David</h3>
          </div>
      </div>
    </div>
  );
}


export default App;
