import React, { useEffect, useState } from "react";

const BackButton = ({sceneData, handleClick}) => {

    return (
        <div className="next-button-div">
            
            <button className="back-button-test" onClick={() => handleClick()}><i class="fas fa-arrow-left fa-3x"></i></button>
        </div>
    );
}

export default BackButton;