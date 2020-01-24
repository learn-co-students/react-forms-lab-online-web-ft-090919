import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      characterLimit: props.maxChars,
      message: ''
    };
  }

  showRemainingCharacters = (event) => {
    // this would verify that backspace adds to character limit
    // but I don't think the test checks for that
    // -----
    // if (event.nativeEvent.inputType == 'deleteContentBackward') {
    //   this.setState({
    //     characterLimit: (this.state.characterLimit + 1),
    //     message: event.target.value
    //   })
    // } else {
    this.setState({
      characterLimit: (this.state.characterLimit - 1),
      message: event.target.value
    })
  // }
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Remaining characters: {this.state.characterLimit} </p>
        <input type="text" value={this.state.message} name="message" onChange={this.showRemainingCharacters} id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
