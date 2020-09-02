import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: ""
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    } 
  }

  handleOnUsernameChange = (event) => {
    let newVal = event.target.value
    this.setState({
      username: newVal
    })

  }

  handleOnPasswordChange = (event) => {
    let newVal = event.target.value
    this.setState({
      password: newVal
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event) }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleOnUsernameChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handleOnPasswordChange(event)}/>
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
