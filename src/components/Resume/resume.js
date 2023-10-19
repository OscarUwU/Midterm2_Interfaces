import "./resume.css";
function resume({onClick}){
    return(
        <div className="Backgr">
            <div className="ResumeTitle">
                <h1 className = "Back" onClick={() => onClick(5)}>Return</h1>
                <h1>Oscar Durán</h1>
                <h2>Age: </h2>
                <p>20 years old</p>
                <h2>Career: </h2>
                <p>Engineering in digital animation</p>
                <h2>Programs: </h2>
                <div className="Programs">
                    <div className="imag"></div>
                    <div className="imag2"></div>
                    <div className="imag3"></div>
                </div>
                <h2>Programing languages: </h2>
                <div className="Programs">
                    <div className="imag4"></div>
                    <div className="imag5"></div>
                    <div className="imag6"></div>
                </div>
                
            </div>
        </div>
    );
}

export default resume