const UserForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="userName">Name</label>
        <input type="text" id="userName" value="Write your name here..." />
        <label htmlFor="userEmail">E-mail</label>
        <input type="email" id="userEmail" value="Write your e-mail here..." />
        <input type="submit" value="Enter" />
      </form>
    </div>
  )
}

export default UserForm
