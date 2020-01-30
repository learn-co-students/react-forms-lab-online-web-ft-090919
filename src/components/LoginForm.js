import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }


  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
      // password: event.target.value 
    })
  }


  handlePasswordChange = (event) => {
    this.setState({
      // username: event.target.value,
      password: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    if (this.state.username !== "" && this.state.password !== "") 
    this.props.handleLogin(this.state)
  }


  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            onChange={event => this.handleUsernameChange(event)} 
            value={this.state.username}
            />
            {/* anything to display */}
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            onChange={event => this.handlePasswordChange(event)} 
            value={this.state.password} 
            />
            {/* anything to display */}
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}



export default LoginForm;
