import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMessage:""
    };
  }

 handleChange = (event) =>{
  this.setState({currentMessage: event.target.value})

 }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.currentMessage} name="message" id="message" onChange={this.handleChange} />
        {this.props.maxChars - this.state.currentMessage.length}
      </div>
    );
  }
}

export default TwitterMessage;
