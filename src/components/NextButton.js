import React, { useEffect, useState } from "react";
import * as data from "../scenes.json";


const NextButton = ({sceneData, handleClick}) => {

    return (
        <div className="next-button-div">
            <button className="next-button" onClick={() => handleClick(sceneData.next_scene_id)}>Next</button>
        </div>
    );
}

export default NextButton;