import './Imgrid2.css';
import { useState } from 'react';
import img from '../imgs/Halo.jpg';
import Load from '../Loading/loading';
import { IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import Grids from './Imgrid';
import Port from '../portfolios/portfolios';

const img1 = "https://www.instagram.com/p/CiQHGl2Oa7W/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img2 ="https://www.instagram.com/p/CnnY1jLO3ek/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img3 = "https://www.instagram.com/p/CZhdG4zuJIW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img4 = "https://www.instagram.com/p/ClZX-gEOO6Y/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img6 ="https://www.instagram.com/p/CPiwOfiFAKy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img7 = "https://www.instagram.com/p/CGsHlzTDEyG/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img9 = "https://www.instagram.com/p/Cb72WKEOn5H/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";


function Grid2({onClick}) {

  return (
  <div className='Redes2'>
    <div className='NavBarGrid2'>
      <div>
        <IconButton className='Hola2' onClick={() => onClick(2)}>
          <ArrowBackIos/>
        </IconButton>
      </div>
      <div>
        <h1 className='H1'> David Rivera</h1>
      </div>
      <div className='Ab2'>
        <h4 onClick={() => onClick(6)}> About David</h4>
      </div>
    </div>
    <div className='Gallery2'>
      <div className='grid2'>
        <a href={img1}><div className='images-2' ></div></a>
        <a href={img2}><div className='images2-2'></div></a>
        <a href={img3}><div className='images3-2'></div></a>
      </div>
      <div className='grid22'>
        <a href={img4}><div className='images4-2'></div></a>
        <div className='images5-2'></div>
        <a href={img6}><div className='images6-2'></div></a>
      </div>
      <div className='grid32'>
        <a href={img7}><div className='images7-2'></div></a>
        <div className='images8-2'></div>
        <a href={img9}><div className='images9-2'></div></a>
      </div>
    </div>
  </div>
  );
}

export default Grid2;
