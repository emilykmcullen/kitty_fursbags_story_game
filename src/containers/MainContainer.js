import React, { useEffect, useState } from "react";
import BottomText from "../components/BottomText";
import ChoiceButton from "../components/ChoiceButton";
import MainImage from "../components/MainImage";
import NextButton from "../components/NextButton";
import TopText from "../components/TopText";
import EndScene from "../components/EndScene";
import StartButton from "../components/StartButton";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import StartAgainButton from "../components/StartAgainButton";
import * as data from "../scenes.json";

const MainContainer = () => {
    const [currentSceneId, setCurrentSceneId] = useState(0);
    const [allData, setAllData] = useState(data.default);
    const [currentSceneData, setcurrentSceneData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [scenePath, setScenePath] = useState([0]);


    useEffect(() => {
        const fetchCurrentSceneData = () => {
            let sceneData = allData.find((element) => {
                return element.id === currentSceneId
            })
            setcurrentSceneData(sceneData);
            setIsLoaded(true)
        }
       fetchCurrentSceneData();
    }, [currentSceneId, allData]) 


    const handleClick = (sceneId) => {
       setIsLoaded(false);
       setCurrentSceneId(sceneId);
       const newScenePath = scenePath.concat([sceneId]);
       setScenePath(newScenePath);
    }


    const handleBackClick = () => {
        setIsLoaded(false);
        const index = scenePath.length - 2;
        const newId = scenePath[index];
        setCurrentSceneId(newId);
        scenePath.pop();
    }


   const handleStartAgainClick = () => {
    setIsLoaded(false);
    setCurrentSceneId(0);
    setScenePath([0]);
    setAllData(data.default)
    }


    return (
         
        <div className="main-content-div">
            
            
                <TopText sceneId={currentSceneId} sceneData={currentSceneData}/>
                <MainImage sceneId={currentSceneId} sceneData={currentSceneData}/>
                <BottomText sceneId={currentSceneId} sceneData={currentSceneData}/>
                {currentSceneData.end && <EndScene/>}
            
            <div  className="buttons-div">
            
                {currentSceneId!==0 && isLoaded && !currentSceneData.next && !currentSceneData.end && <ChoiceButton sceneId={currentSceneId} sceneData={currentSceneData} allData={allData} isLoaded={isLoaded} handleClick={handleClick}/> }
                {currentSceneId===0 && <StartButton sceneData={currentSceneData} handleClick={handleClick}/>}
                {currentSceneId!==0 &&currentSceneData.next && !currentSceneData.end && <NextButton sceneData={currentSceneData} handleClick={handleClick} /> }
                {currentSceneData.end && <StartAgainButton handleClick={handleStartAgainClick} /> }
                {currentSceneId!==0 && <BackButton handleClick={handleBackClick} /> } 
                 
            </div>
            
            {currentSceneId===0 && <Footer/> } 
            
        </div>
        
    );
}

export default MainContainer;