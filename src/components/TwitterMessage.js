import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textInput: "",
      textCount: 0
    };
  }

  handleTextChange = (event) => {
    this.setState({
      textInput: event.target.value,
      textCount: event.target.value.length
    })
  }

  remainingText = () => {
    return (280 - this.state.textCount)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={event => this.handleTextChange(event)}
        value={this.state.textInput}
        />
        {this.remainingText()}
      </div>
    );
  }
}



export default TwitterMessage;
