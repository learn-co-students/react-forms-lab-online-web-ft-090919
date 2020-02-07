import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      charactersLeft: props.maxChars
    };
  }

  handleChange = (event) => {
    let currentVal = event.target.value
    this.setState(previousState => {
      let char = currentVal.length > previousState.message.length? 1 : -1
      return{
        message: currentVal,
        charactersLeft: previousState.charactersLeft - char
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <br/>
        <p>{this.state.charactersLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
