import React, { useEffect, useState } from "react";



const TopText = ({sceneId, sceneData}) => {

    return (
        <div>
            {sceneData.top_text}
        </div>
    );
}

export default TopText;