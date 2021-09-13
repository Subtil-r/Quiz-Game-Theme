import { useEffect, useState } from "react";
import Header from "../components/Header";
import QuizCard from "../components/QuizCard";

const Quiz = ({ quizRes, score, scoreState, resScore, currQues, quesNum }) => {
  const [options, setOptions] = useState();
  

  console.log("quiz.js - currques +", currQues);

  useEffect(() => {
    console.log("as questoes chegando na pagina quiz", quizRes);
    setOptions(
      quizRes &&
        handleShuffle([
          quizRes[currQues]?.correct_answer,
          ...quizRes[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, quizRes]);

  console.log("data vindo do props do app", quizRes);
  console.log("as opções", options);

  const handleShuffle = (opt) => {
    return opt.sort(() => Math.random() - 0.5);
  };

  //console.log('as questoes  fora do effect hook', quizRes)

  return (
    <div>
      <h1>I'm the quiz</h1>
      <Header score={score} />
      <QuizCard
        currQues={currQues}
        setCurrQues={quesNum}
        quizRes={quizRes}
        options={options}
        correct={quizRes[currQues]?.correct_answer}
        score={score}
        setScore={scoreState}
        resScore={resScore}
        //setQuestions={setQuestions}
      />
    </div>
  );
};

export default Quiz;
