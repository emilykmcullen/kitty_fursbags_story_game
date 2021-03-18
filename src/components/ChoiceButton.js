import React from "react";

const ChoiceButton = ({ sceneData, handleClick}) => {
    
    const myButtons = sceneData.buttons.map((b, key) => {
        return (
            <button className="choice-button" key={key} value={b.next_scene_id} onClick={() => handleClick(b.next_scene_id)}>{b.text}</button>
        )
    })
 
    return (
        <div className="choice-button-div">
            {myButtons}   
        </div>
    );
}

export default ChoiceButton;