import React, { useEffect, useState } from "react";

const MainImage = ({sceneData}) => {

    return (
        <div>
            <img className="main-image" src={sceneData.image} alt="Girl in a jacket" width="500" height="600"></img>
        </div>
    );
}

export default MainImage;