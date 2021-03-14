import React, { useEffect, useState } from "react";
import BottomText from "../components/BottomText";
import ChoiceButton from "../components/ChoiceButton";
import MainImage from "../components/MainImage";
import NextButton from "../components/NextButton";
import TopText from "../components/TopText";
import * as data from "../scenes.json";

const MainContainer = () => {
   const [currentSceneId, setCurrentSceneId] = useState(1);
   const [allData, setAllData] = useState(data.default);
   const [currentSceneData, setcurrentSceneData] = useState({});
   const [isLoaded, setIsLoaded] = useState(false);


   useEffect(() => {
       fetchCurrentSceneData();
   }, [currentSceneId]) 

   

   const fetchCurrentSceneData = () => {
        let sceneData = allData.find((element) => {
            return element.id === currentSceneId
        })
        setcurrentSceneData(sceneData);
        setIsLoaded(true);
   }



    

    return (
         
        <div>
            <TopText sceneId={currentSceneId} sceneData={currentSceneData}/>
            {/* <MainImage sceneId={currentSceneId} data={allData}/> */}
            <BottomText sceneId={currentSceneId} sceneData={currentSceneData}/>
            {isLoaded && <ChoiceButton sceneId={currentSceneId} sceneData={currentSceneData} allData={allData} isLoaded={isLoaded}/> }
            <NextButton sceneId={currentSceneId} sceneData={currentSceneData}/>
        </div>
        
    );
}

export default MainContainer;