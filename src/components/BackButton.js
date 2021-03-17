import React, { useEffect, useState } from "react";

const BackButton = ({sceneData, handleClick}) => {

    return (
        <div className="next-button-div">
            
            <button className="back-button" onClick={() => handleClick()}><i class="fas fa-arrow-left"></i></button>
        </div>
    );
}

export default BackButton;