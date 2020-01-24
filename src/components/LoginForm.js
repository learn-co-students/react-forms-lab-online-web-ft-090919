import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  actuallySubmit = (event) => {
    event.preventDefault()

    if (this.state.username === '' || this.state.password === '') {
      console.log('enter a username or password')
    } else {
      this.props.handleLogin(this.state)
    }
  }

  handleTextUpdates = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.actuallySubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} name="username" type="text" onChange={event => this.handleTextUpdates(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.state.password} name="password" type="password" onChange={event => this.handleTextUpdates(event)} />
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
