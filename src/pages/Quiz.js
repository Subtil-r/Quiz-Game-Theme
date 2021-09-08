import {useEffect, useState} from 'react'
import QuizCard from '../components/QuizCard'

const Quiz = ({quizRes}) => {
 const [options, setOptions] = useState()
 const [currQues, setCurrQues] = useState(0)


  useEffect(() => {
    console.log('as questoes chegando na pagina quiz', quizRes)
    setOptions(quizRes && handleShuffle([
      quizRes[currQues]?.correct_answer,
      ...quizRes[currQues]?.incorrect_answers
    ]))
    
  }, [currQues, quizRes])


  console.log('data vindo do props do app', quizRes)
  console.log('as opções', options)
  const handleShuffle = (opt) => {
    return opt.sort(()=> Math.random() - 0.5);
  }

  //console.log('as questoes  fora do effect hook', quizRes)


  return (
    <div>
      <h1>I'm the quiz</h1>
        <QuizCard 
        currQues={currQues}
        setCurrQues={setCurrQues}
        quizRes={quizRes}
        options={options}
        //correct={quizRes[currQues]?.correct_answer}
        //score={score}
        //setScore={setScore}
        //setQuestions={setQuestions}
      />  
    </div>
  )
}

export default Quiz
