import "./styles.css";
import React from "react";
import Background from "../src/img/fundo.jpg";

export default class App extends React.Component {
  state = {
    number: 0
  };

  Start = () => {
    const Cont = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);

    this.Stop = () => {
      clearInterval(Cont);
    };
  };

  Restart = () => {
    this.setState({ number: 0 });
  };
  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => {
            this.Start();
          }}
        >
          🏁Start🏁
        </button>
        <button
          onClick={() => {
            this.Restart();
          }}
        >
          🔙
        </button>
        <button
          onClick={() => {
            this.Stop();
          }}
        >
          🛑Stop!🛑
        </button>
      </>
    );
  }
}
