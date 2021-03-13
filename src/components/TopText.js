import React, { useEffect, useState } from "react";



const TopText = ({sceneId, data}) => {

    const scene = data.find(element => element.id===sceneId)

    return (
        <div>
            {scene.top_text}
        </div>
    );
}

export default TopText;