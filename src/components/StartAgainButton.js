import React, { useEffect, useState } from "react";

const StartAgainButton = ({handleClick}) => {

    return (
        <div className="next-button-div">
            
            <button className="back-button start-again" onClick={() => handleClick()}>Start Again</button>
        </div>
    );
}

export default StartAgainButton;