import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ''};
  }

  showRemainingChars = () => {
    return this.props.maxChars - this.state.message.length
  }

  handleInputChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInputChange} value={this.state.message} name="message" id="message" />
        <h3> Remain Charecters Allowed {this.showRemainingChars()}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
