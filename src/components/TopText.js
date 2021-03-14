import React, { useEffect, useState } from "react";



const TopText = ({sceneId, sceneData}) => {

    return (
        <div className="top-text">
            {sceneData.top_text}
        </div>
    );
}

export default TopText;