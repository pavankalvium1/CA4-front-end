import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {  
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(true)
  const [themeName, setThemeName] = useState("dark")

  const optionClicked = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleToggle = ()=>{
    setTheme(theme?false:true);
  }
  function backGroundColors(color){

    document.body.style.backgroundColor = color? "#4169e1":"#a2a8d3";
    return{
      backgroundColor : color? "#4169e1":"#a2a8d3",
    }
  }
  function textColor(color){
    return{
      color:color?"white":"#ec495c",
    }
  }
  useEffect(()=>{
    setThemeName(themeName==="light"?"dark":"light")
  },[theme])
  return (
    <div className="body App" style={backGroundColors(theme)}>
        <div className="header">
        <img src="https://kalvium.com/wp-content/uploads/2023/05/Kalvium-OG.webp" style={{width:"100px",height:"100px"}} alt="" />
        <div className="btn toggle-button" onClick={handleToggle}>{themeName}</div>
      </div>
      
        {
          showResults ? <Result setScore={setScore} score={score} setCurrentQuestion={setCurrentQuestion} setShowResults={setShowResults} length={questions.length}/> : 
          <QuestionBox questions={questions} optionClicked={optionClicked} currentQuestion={currentQuestion}/>
        }
      {/* <QuestionBox/>
      <Result/> */}
    </div>
  );
}
export default App;