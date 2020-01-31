import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      maxChars: this.props.maxChars,
      characterLimit: this.props.maxChars
    };
  }

  characterCalc = (value) => {
    return this.state.maxChars - value.length
  }

  handleTextChange = (event) => {
    console.log("re-render")
    this.setState({
      text: event.target.value,
      characterLimit: this.characterCalc(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTextChange(event)} value={this.state.text}/>
        <text>{this.state.characterLimit}</text>
      </div>
    );
  }
}

export default TwitterMessage;
