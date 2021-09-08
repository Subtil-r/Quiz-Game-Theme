const QuizCard = ({currQues, setCurrQues, quizRes, options}) => {
  return (
    <div>
      <h1>Question {currQues + 1}</h1>
      <h2>{ quizRes[currQues].question }</h2>
      <div className="quizcard_option">
      {
        options &&
        options.map((i) => (
              <button>
                {i}
              </button>
            ))
      }
      </div>
    </div>
  )
}

export default QuizCard
