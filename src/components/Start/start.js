import './start.css';

function Start({onClick}){
    return(
        <div className="Inicioo">
            <h1>Portfolio</h1>
            <div onClick={() => onClick(2)}>
            <h3 className='Enter'>
                Click here to enter
            </h3>
            </div>
        </div>
    );
}

export default Start;