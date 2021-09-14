import { useEffect, useState } from "react";
import Header from "../components/Header";
import QuizCard from "../components/QuizCard";

const Quiz = ({ quizRes, score, scoreState, resScore, currQues, quesNum, resQuesNum }) => {
  const [options, setOptions] = useState();

  useEffect(() => {
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

  return (
    <div>
      <h1>I'm the quiz</h1>
      <Header score={score} />
      <QuizCard
        currQues={currQues}
        resQuesNum={resQuesNum}
        setCurrQues={quesNum}
        quizRes={quizRes}
        options={options}
        correct={quizRes[currQues]?.correct_answer}
        score={score}
        setScore={scoreState}
        resScore={resScore}
      />
    </div>
  );
};

export default Quiz;
