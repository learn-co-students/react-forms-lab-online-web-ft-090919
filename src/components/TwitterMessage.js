import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  // Part of what I inititially wrote, uses state to keep track of chars remaining
  // 
  // Can use this.handleChange in the JSX for render()
  //
  // handleChange = event => {
  //   const inputValue = event.target.value
    
  //   this.setState({
  //
  //     charRemaining: this.props.maxChars - inputValue.length
  //   })
  // }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.setState({message: event.target.value})} name="message" id="message" value={this.state.message}/>
       {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
