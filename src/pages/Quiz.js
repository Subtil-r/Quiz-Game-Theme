import {useEffect, useState} from 'react'

const Quiz = ({quizRes}) => {
 const [options, setOptions] = useState()
 const [currQues, setCurrQues] = useState(0)


  useEffect(() => {
    console.log('the data from the quiz to fetch', quizRes)
    setOptions(quizRes && handleShuffle([
      quizRes[currQues]?.correct_answer,
      ...quizRes[currQues]?.incorrect_answers
    ]))
    
  }, [quizRes])

  const handleShuffle = (opt) => {
    return opt.sort(()=> Math.random() - 0.5);
  }


  return (
    <div>
      <h1>I'm the quiz</h1>
    </div>
  )
}

export default Quiz
