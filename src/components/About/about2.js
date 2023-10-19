import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';
import './about2.css';
import { IconButton } from '@mui/material';

const lnk = "https://twitter.com/Raxart39";
const lnk2 = "https://www.instagram.com/davidriver12/";
const lnk3 ="https://www.threads.net/@raxart_39";

function about2({onClick}){

    return(
        <div className='About2'>
            <div className='Navbar2'>
                    <div>
                        <IconButton onClick={() => onClick(4)}>
                            <ArrowBackIos className='Back2'/>
                        </IconButton>
                    </div>
                    <div>
                        <div className='Title2'>
                            <h1>About David</h1>
                            <h1 className = "Back2"onClick={() => onClick(8)}>More Info.</h1>
                        </div>
                    </div>          
            </div>
            <div className='ALLab2'>
                        <div className='Retrato2'></div>
                        <div className='Info2'>
                            <h3>Hola<br></br>
                            My name is David Rivera, I'm a student in: Universidad Panamericana<br></br>
                            From Guadalajara, I'm currently cursing my 7th semester as an engineer<br></br>
                            in digital animation, I'm specialized in photography and filmmaking.<br></br>
                            <br></br><br></br>
                            
                            You can find more of my work on my social media accounts:
                            </h3>
                        </div>
                    
                </div>
                <div class='Social2'>

                <a href={lnk}><div className='Twitter'></div></a>
                <a href={lnk2}><div className='Instagram'></div></a>
                <a href={lnk3}><div className='Threads'></div></a>
                </div>
        </div>
    );
}

export default about2;