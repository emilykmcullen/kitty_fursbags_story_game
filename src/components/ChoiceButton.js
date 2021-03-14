import React, { useEffect, useState } from "react";


const ChoiceButton = ({sceneId, sceneData, allData, isLoaded, handleClick}) => {

    if(!isLoaded){
        return <h1>Loading...</h1>
    }
    
    const myButtons = sceneData.buttons.map((b, key) => {
        return (
            <button key={key} value={b.next_scene_id} onClick={() => handleClick(b.next_scene_id)}>{b.text}</button>
        )
    })
 
    return (
        <div>
            <h1>{myButtons}</h1>
            
        </div>
    );
}

export default ChoiceButton;