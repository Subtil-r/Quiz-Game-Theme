import logo from '../img/quizwhite.png'

const Header = ({score, userData}) => {
  return (
    <div className="Header_Container">
      <div className="Header_El">
        <figure className="Header_Fig">
          <img className="Header_Logo" src={logo}  alt="quiz game logo" />
        </figure>
        <h2 className="Header_Score">{score}</h2>
        {/* <h3 className="Header_UserName">{userData}</h3> */}
      </div>
      <hr />
    </div>
  )
}

export default Header
