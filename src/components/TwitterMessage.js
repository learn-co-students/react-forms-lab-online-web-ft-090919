import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.tweet} />
        <small>{this.props.maxChars-this.state.tweet.length}</small>
      </div>
    );
  }
}

export default TwitterMessage;
