import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
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
      </div>
    );
  }
}

export default TwitterMessage;
