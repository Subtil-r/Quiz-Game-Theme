import useForm from '../hook/useForm'
import validateInfo from './validateInfo';

const UserForm = ({submitForm, userData}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo, userData);

  return (
    <div className="Form_Container" >
      <form className="Form_User" onSubmit={handleSubmit} id="formUser">
        <h2>Fill in to start</h2>
          <div className="Form_Input">
            <label 
            htmlFor="username" 
            className="Form_Label"
            >
              Name
            </label>
            <input 
            type="text" 
            id="username" 
            name="username" 
            className="Form_UserName" 
            /* placeholder="Write your name here..." */
            value={values.username}
            onChange={handleChange}
            />
            {errors.username && <p className="Form_Error">{errors.username}</p>}
          </div>
          <div className="Form_Input">
            <label 
            htmlFor="email" 
            className="Form_Label"
            >
            E-mail
            </label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            className="Form_UserEmail" 
            /* placeholder="E-mail" */
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p className="Form_Error">{errors.email}</p>}
          </div>
        <button form="formUser" type="submit" className="Form_Submit" >enter</button>
      </form>
    </div>
  )
}

export default UserForm
