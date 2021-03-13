import React, { useEffect, useState } from "react";
import * as data from "../scenes.json";


const BottomText = ({sceneId, data}) => {

    const scene = data.find(element => element.id===sceneId)


    return (
        <div>
            {scene.bottom_text}
        </div>
    );
}

export default BottomText;