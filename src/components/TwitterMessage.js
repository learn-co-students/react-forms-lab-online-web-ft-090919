import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  renderRemainingCharCount() {
    charCount => {
      this.state.message.length;
    };
    this.props.maxChars;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.setState({ message: event.target.value })}
          value={this.state.message}
        />
        <div>{this.renderRemainingCharCount}</div>
      </div>
    );
  }
}

export default TwitterMessage;
