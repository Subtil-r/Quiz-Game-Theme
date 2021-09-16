import { useHistory } from "react-router"

const Result = ({level, score, resetScore, resQuesNum, userData}) => {

  const calcDiscount = () => {
    if (level === 'easy'){
      if (score <= 1){
        return '5%'
      } else if (score <= 4){
        return '10%'
      } else if (score <= 7){
        return '25%'
      } else if (score === 8 || score === 9){
        return '35%'
      } else if (score === 10){
        return '45%'
      } 
    } else if (level === 'medium'){
      if(score <= 1){
        return '10%'
      } else if (score <= 4){
        return '15%'
      } else if (score <= 7){
        return '30%'
      } else if (score === 8 || score === 9){
        return '45%'
      } else if (score === 10){
        return '70%'
      }
    } else if (level === 'hard'){
         if (score <= 1){
          return '10%'
        } else if (score <= 4){
          return '20%'
        } else if (score <= 7){
          return '50%'
        } else if (score === 8 || score === 9){
          return '65%'
        }  else if (score === 10){
          return '85%'
        }
  }
}

  const history = useHistory()

  const backHome = () => {
    resetScore(0)
    resQuesNum(0)
    history.push('/dashboard')
  }
  
  return (
    <div className="Res_Container">
      <h1 className="Res_Title">results</h1>
      <h2 className="Res_Score">Your end score is</h2> 
      <div className="Res_Group">
        <span className="Res_Num">{score}</span> in <span className="Res_Level">{level}</span> level
      </div>
      <h3 className="Res_Disc">Your discount is:</h3> 
      <div className="Res_DiscNum">
        {calcDiscount()}
      </div>
      <p className="Res_Email">We are sending your discount cupon to the provided e-mail: <span className="Res_UserEmail">{userData}</span> </p>
      <button className="Res_Button" onClick={backHome}>home</button>
    </div>
  )
}

export default Result
