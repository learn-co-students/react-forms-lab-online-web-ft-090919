import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitting')
    const name = this.state.username
    const password = this.state.password
    console.log(password)
  }

  handleInputChange = (event) => {
    const newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.username}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
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
