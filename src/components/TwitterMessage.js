import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      imputValue : " "
    };
  }

changeValue = (e) => {
  this.setState({
    imputValue : e.target.value
  })
}

  render() {
    return (
      <div>
        <strong>Remaining characters: {this.props.maxChars - (this.state.imputValue.length - 1)} </strong>
        <br></br>
        <strong>Your message:</strong>
        
        <input type="text" name="message" id="message" onChange={(e) => this.changeValue(e)}/>
      </div>
    );
  }
}

export default TwitterMessage;
