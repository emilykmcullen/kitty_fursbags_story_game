import React from "react";

const StartAgainButton = ({handleClick}) => {

    return (
        <div className="next-button-div">
            
            <button className="start-again" onClick={() => handleClick()}>Start Again</button>
        </div>
    );
}

export default StartAgainButton;