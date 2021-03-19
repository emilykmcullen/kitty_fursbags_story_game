import React from "react";

const MainImage = ({sceneData}) => {

    return (
        <div className="main-image-div">
            <img className="main-image" src={sceneData.image} alt={sceneData.image_alt_text}></img>
        </div>
    );
}

export default MainImage;