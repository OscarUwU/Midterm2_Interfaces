import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';
import './about.css';
import { IconButton } from '@mui/material';

const lnk = "https://twitter.com/Raxart39";
const lnk2 = "https://www.instagram.com/raxart_39/";
const lnk3 ="https://www.threads.net/@raxart_39";

function about({onClick}){

    return(
        <div className='About'>
            <div className='Navbar'>
                    <div>
                        <IconButton onClick={() => onClick(3)}>
                            <ArrowBackIos className='Back2'/>
                        </IconButton>
                    </div>
                    <div>
                        <div className='Title'>
                            <h1>About Oscar</h1>
                            <h1 className = "Back2"onClick={() => onClick(7)}>More Info.</h1>
                        </div>
                    </div>          
            </div>
            <div className='ALLab'>
                    <div className='Retrato'></div>
                    <div className='Info'>
                        <h3>My name is Oscar Durán, I'm a student in the University: Universidad Panamericana<br></br>
                            from Guadalajara, I'm currently cursing my 7th semester at the career: Engineering<br></br>
                            in digital animation, I would like to specialize in 2D animation, 3D animation, <br></br>
                            background design and character design.
                            <br></br><br></br>
                            You can find more of my work on my social media accounts:
                        </h3>
                    </div>
                    
            </div>
            <div class='Social'>
                <a href={lnk}><div className='Twitter'></div></a>
                <a href={lnk2}><div className='Instagram'></div></a>
                <a href={lnk3}><div className='Threads'></div></a>
            </div>
        </div>
    );
}

export default about;