import {useState} from 'react'
import { useHistory } from 'react-router'




const QuizCard = ({currQues, setCurrQues, resQuesNum, quizRes, correct, options, setScore, resScore}) => {
const [selected, setSelected] = useState();
const [nextVis, setNextVis] = useState("nextBtnFalse")

const history = useHistory();

const handleCheck = (i) => {
  setSelected(i)
  setNextVis("nextBtnVis animate__bounceIn")
}

const handleSelect = (i) => {
  if (selected === i && selected === correct){
    return "animate__rubberBand rightans";
  } else if (selected === i && selected !== correct){
    return "animate__shakeX wrongans";
  }else if (i === correct){
    return "animate__rubberBand rightans";
  } 
}


const handleNext = () => {
  console.log('a funcao do next', handleNext)
  if (currQues > 8){
    history.push('/result')
  } else if (selected){
    setCurrQues(1)
    setSelected()
    if (selected === correct) setScore(1)
    setNextVis("nextBtnFalse")
  } else {
    setNextVis("nextBtnFalse")
  }
}

const handleQuit = () => {
  history.push('/dashboard')
  resScore(0)
  resQuesNum(0)
}

  return (
    <div className="quizcard_Container">
      <h1 className="quizcard_Number">Question {currQues + 1}</h1>
      <div className="quizcard_QA animate__animated animate__zoomIn">
        <h2 className="quizcard_Question">{ quizRes[currQues].question }</h2>

        <div className="quizcard_OptionGroup">
        {
          options &&
          options.map((i) => (
                <button className={`quizcard_Option animate__animated ${selected && handleSelect (i)}`} onClick={()=>handleCheck(i)} key={i} disabled={selected}>
                  {i}
                </button>
              ))
        }
        </div>
      </div>
      <div className="quizcard_Controls">
        <button onClick={handleQuit} className="quizcard_Quit">quit</button>
        <button onClick={handleNext} className={`quizcard_Next ${nextVis}`}>next</button>
      </div>
    </div>
  )
}

export default QuizCard
