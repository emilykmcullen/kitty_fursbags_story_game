import React from "react";

const NextButton = ({sceneData, handleClick}) => {

    return (
        <div className="next-button-div">
            <button className="next-button" onClick={() => handleClick(sceneData.next_scene_id)}>Next</button>
        </div>
    );
}

export default NextButton;