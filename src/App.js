import logo from './logo.svg';
import './App.css';
import Port from './components/portfolios/portfolios.js';
import Load from './components/Loading/loading.js';
import Grids from './components/ImgGrid/Imgrid.js';
import Grids2 from './components/ImgGrid/Imgrid2';
import Start from './components/Start/start.js';
import About from './components/About/about.js';
import About2 from './components/About/about2.js';
import Resume from './components/Resume/resume.js';
import Resume2 from './components/Resume/resume2';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

function App() {                  
const [index, setIndex] = useState(1);

//Pages of the proyect
const scenes = [
<Load/>,
<Start onClick = {(newIndex) => setIndex(newIndex)}/>, 
<Port onClick = {(newIndex) => setIndex(newIndex)}/>,
<Grids onClick = {(newIndex) => setIndex(newIndex)}/>,
<Grids2 onClick = {(newIndex) => setIndex(newIndex)}/>, 
<About onClick = {(newIndex) => setIndex(newIndex)}/>,
<About2 onClick = {(newIndex) => setIndex(newIndex)}/>,
<Resume onClick = {(newIndex) => setIndex(newIndex)}/>,
<Resume2 onClick = {(newIndex) => setIndex(newIndex)}/>
]

//Place where you call all the pages
  return (
    <div className="App">
      {<div>
          {scenes[index]}
      </div>}
    </div>
  );
}

export default App;
