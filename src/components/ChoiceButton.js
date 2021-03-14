import React, { useEffect, useState } from "react";


const ChoiceButton = ({ sceneData, handleClick}) => {
    
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