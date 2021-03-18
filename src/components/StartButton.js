import React from "react";

const StartButton = ({sceneData, handleClick}) => {

    return (
        <div className="next-button-div">
            <button className="next-button" onClick={() => handleClick(sceneData.next_scene_id)}>Enter</button>
        </div>
    );
}

export default StartButton;