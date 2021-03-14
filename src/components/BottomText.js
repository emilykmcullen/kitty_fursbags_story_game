import React, { useEffect, useState } from "react";


const BottomText = ({sceneId, sceneData}) => {

    return (
        <div className="bottom-text">
            {sceneData.bottom_text}
        </div>
    );
}

export default BottomText;