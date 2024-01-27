import React, {useRef} from 'react'
export default function QuestionBox({questions,optionClicked,currentQuestion}) {

const focusQuestion = useRef();

  function handleFocus(){
    focusQuestion.current.style.color = "green";
  }

  function handleNoFocus(){
    focusQuestion.current.style.color = "black";
  }
  return (
    
    <div className='questionBox-body'>
     
      <div className="card">
        <h2 className='q-no'>Question: {currentQuestion + 1} out of {questions.length}</h2>
        <h2 className="question-text"ref={focusQuestion}>{questions[currentQuestion].text}</h2>
        
{questions[currentQuestion].options.map((option) => {
            return (
              <div className="option-btn" key={option.id}
                onClick={() => optionClicked(option.isCorrect)}>{option.text}</div>
            );
          })}

        <div className="nav-btns">
          <div className="highlight-btns" onClick={handleFocus}>Highlight</div>
          <div className="highlight-btns" onClick={handleNoFocus}>Remove Highlight</div>
        </div>
      </div>

    </div>
    
  )
}
