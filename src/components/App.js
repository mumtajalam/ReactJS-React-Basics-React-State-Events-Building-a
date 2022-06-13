import React, { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallorButton.Bind(this);
    this.buttonClickHandler = this.buttonClickHandler.Bind(this);
  }

  buttonClickHandler() {}

  renderBallorButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button onClick={this.buttonClickHandler}>Click for one ball</button>
      );
    }
  }

  componentDidMount() {}
  render() {
    return;
    <>
      <div className="playground">{this.renderBallorButton()}</div>
    </>;
  }
}
export default App;
