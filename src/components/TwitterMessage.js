import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  render() {
    return (
      <div>
        <p>
          {this.props.maxChars - this.state.message.length} characters remaining
        </p>
        <strong>Your message:</strong>
        <input
          onChange={this.handleOnChange}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
