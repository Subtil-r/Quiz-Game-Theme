import {useState} from 'react'
import { useHistory } from 'react-router'


const QuizCard = ({currQues, setCurrQues, resQuesNum, quizRes, correct, options, setScore, resScore}) => {
const [selected, setSelected] = useState();
const [nextVis, setNextVis] = useState("nextBtnFalse")

const history = useHistory();

const handleCheck = (i) => {
  setSelected(i)
  setNextVis("nextBtnVis")
}

const handleSelect = (i) => {
  if (selected === i && selected === correct){
    return "select";
  } else if (selected === i && selected !== correct){
    return "wrong";
  }else if (i === correct){
    return "select";
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
    <div>
      <h1>Question {currQues + 1}</h1>
      <h2>{ quizRes[currQues].question }</h2>
      <div className="quizcard_option">
      {
        options &&
        options.map((i) => (
              <button className={`singleOption ${selected && handleSelect (i)}`} onClick={()=>handleCheck(i)} key={i} disabled={selected}>
                {i}
              </button>
            ))
      }
      </div>
      <div className="quizcard_controls">
        <button onClick={handleQuit}>quit</button>
        <button onClick={handleNext} className={nextVis}>next</button>
      </div>
    </div>
  )
}

export default QuizCard
