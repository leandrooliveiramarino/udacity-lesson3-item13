import React, { Component } from 'react';

class Mirror extends Component {
  
  state = {
    text: ''
  }

  refreshText = (event) => {
    this.setState({
      text: event.target.value
    });
  }
  
  render() {
    return (
      <div className="container">
      	<input type="text" placeholder="Say Something" onChange={this.refreshText} />
      	<p className="echo">Echo:</p>
      	<p>{this.state.text}</p>
      </div>
    )
  }
}

export default Mirror;