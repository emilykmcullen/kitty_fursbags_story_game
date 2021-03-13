import React, { useEffect, useState } from "react";
import BottomText from "../components/BottomText";
import ChoiceButton from "../components/ChoiceButton";
import MainImage from "../components/MainImage";
import NextButton from "../components/NextButton";
import TopText from "../components/TopText";
import * as data from "../scenes.json";

const MainContainer = () => {
   const [currentSceneId, setCurrentSceneId] = useState(1);
   const [allData, setAllData] = useState(data.default)


   



    

    return (
        <div>
            <TopText sceneId={currentSceneId} data={allData}/>
            {/* <MainImage sceneId={currentSceneId} data={allData}/> */}
            <BottomText sceneId={currentSceneId} data={allData}/>
            <ChoiceButton sceneId={currentSceneId} data={allData}/>
            <NextButton sceneId={currentSceneId} data={allData}/>
        </div>
    );
}

export default MainContainer;