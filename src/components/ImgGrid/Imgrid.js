import './Imgrid.css';
import { useState } from 'react';
import img from '../imgs/Halo.jpg';
import Load from '../Loading/loading';
import { IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import Grids from '../ImgGrid/Imgrid';
import Port from '../portfolios/portfolios';

const img1 = "https://www.instagram.com/p/CiQHGl2Oa7W/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img2 ="https://www.instagram.com/p/CnnY1jLO3ek/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img3 = "https://www.instagram.com/p/CZhdG4zuJIW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img4 = "https://www.instagram.com/p/ClZX-gEOO6Y/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img6 ="https://www.instagram.com/p/CPiwOfiFAKy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img7 = "https://www.instagram.com/p/CGsHlzTDEyG/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";
const img9 = "https://www.instagram.com/p/Cb72WKEOn5H/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==";


function Grid({onClick}) {

  return (
  <div className='Redes'>
    <div className='NavBarGrid'>
      <div>
        <IconButton className='Hola' onClick={() => onClick(2)}>
          <ArrowBackIos className='Back2'/>
        </IconButton>
      </div>
      <div>
        <h1 className='H1'> Oscar Durán</h1>
      </div>
      <div className='Ab'>
        <h4 onClick={() => onClick(5)}> About Oscar </h4>
      </div>
    </div>
    <div className='Gallery'>
      <div className='grid'>
        <a href={img1}><div className='images' ></div></a>
        <a href={img2}><div className='images2'></div></a>
        <a href={img3}><div className='images3'></div></a>
      </div>
      <div className='grid2'>
        <a href={img4}><div className='images4'></div></a>
        <div className='images5'></div>
        <a href={img6}><div className='images6'></div></a>
      </div>
      <div className='grid3'>
        <a href={img7}><div className='images7'></div></a>
        <div className='images8'></div>
        <a href={img9}><div className='images9'></div></a>
      </div>
    </div>
  </div>
  );
}

export default Grid;
