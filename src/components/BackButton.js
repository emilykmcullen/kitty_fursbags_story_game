import React, { useEffect, useState } from "react";

const BackButton = ({sceneData, handleClick}) => {

    return (
        <div className="next-button-div">
            
            <button className="back-button" onClick={() => handleClick(sceneData.previous_scene_id)}><i class="fas fa-arrow-left"></i></button>
        </div>
    );
}

export default BackButton;