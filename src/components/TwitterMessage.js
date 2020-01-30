import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (e) => {
    const msg = e.target.value
    this.setState({message: msg})
  }

  render() {
    return (
      <div>
        {this.props.maxChars - this.state.message.length}
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          type="text"
          name="message"
          id="message"
        />
      </div>
    );
  }
}

export default TwitterMessage;
