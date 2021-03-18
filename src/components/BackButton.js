import React from "react";

const BackButton = ({sceneData, handleClick}) => {

    return (
        <div className="next-button-div">
            
            <button className="back-button" onClick={() => handleClick()}><i className="fas fa-arrow-left fa-3x"></i></button>
        </div>
    );
}

export default BackButton;