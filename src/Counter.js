import "./App.css";
import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    int: 0,
  };
  componentDidMount() {
    console.log("componentDidMount()");
    const int = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    this.setState({ int });
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.int);
  }

  render() {
    return (
      <div>
        <h4 className="count"> Counter:{this.state.count}</h4>
      </div>
    );
  }
}

export default Counter;
