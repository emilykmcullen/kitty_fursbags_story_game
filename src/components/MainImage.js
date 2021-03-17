import React, { useEffect, useState } from "react";

const MainImage = ({sceneData}) => {

    return (
        <div className="main-image-div">
            <img className="main-image" src={sceneData.image} alt="Girl in a jacket"></img>
        </div>
    );
}

export default MainImage;