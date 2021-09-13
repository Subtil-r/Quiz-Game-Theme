import { useHistory } from "react-router"

const Result = ({level, score}) => {

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
}git add .

  const history = useHistory()

  return (
    <div>
      <h1>And i'm the results</h1>
      <h2>Your end score is: {score} in {level} level</h2>
      <h3>Your discount is: {calcDiscount()}</h3>
      <p>We are sending your discount cupon to the email provided: </p>
      <button className="home_button" onClick={()=> history.push('/dashboard')}>Home</button>
    </div>
  )
}

export default Result
