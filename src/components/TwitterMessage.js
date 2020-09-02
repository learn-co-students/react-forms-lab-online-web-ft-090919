import React from "react";

class TwitterMessage extends React.Component {
  
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      counter: 0,
      remainingChars: props.maxChars,
      value: ''
    };
  }

  handleOnChange = event => {
    let newCounter = this.state.counter + 1
    let newRemainingChars = this.state.maxChars - newCounter
    let newInputVal = event.target.value
    this.setState({
      counter: newCounter,
      remainingChars: newRemainingChars,
      value: newInputVal
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleOnChange} value={this.state.value}/>
        <p>Characters Remaining: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
