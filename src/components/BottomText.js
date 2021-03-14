import React, { useEffect, useState } from "react";


const BottomText = ({sceneId, sceneData}) => {

    return (
        <div>
            {sceneData.bottom_text}
        </div>
    );
}

export default BottomText;