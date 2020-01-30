import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twerp:""
    };
  }

  handleTextChange = e =>{
    this.setState({
      twerp: e.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleTextChange(e)} value={this.state.twerp} />
        <small>{this.props.maxChars-this.state.twerp.length}</small>
      </div>
    );
  }
}

export default TwitterMessage;
