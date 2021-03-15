import React, { useEffect, useState } from "react";

const NextButton = ({sceneData, handleClick}) => {

    return (
        <div className="next-button-div">
            <button className="next-button" onClick={() => handleClick(sceneData.next_scene_id)}>Enter</button>
        </div>
    );
}

export default NextButton;