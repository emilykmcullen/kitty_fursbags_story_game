import React, { useEffect, useState } from "react";


const ChoiceButton = ({sceneId, sceneData, allData, isLoaded }) => {

    if(!isLoaded){
        return <h1>Loading...</h1>
    }
    
    const myButtons = sceneData.buttons.map((b, key) => {
        return (
            <button key={key}>{b.text}</button>
        )
    })
 
    return (
        <div>
            <h1>{myButtons}</h1>
            
        </div>
    );
}

export default ChoiceButton;