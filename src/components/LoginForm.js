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
    if (event.target.username.value !== "" && event.target.password.value !== "") {
      let name = event.target.username.value
      let pass = event.target.password.value
      this.props.handleLogin({username: name, password: pass})
      // this.props.handleLogin({username: name, password: pass})
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
