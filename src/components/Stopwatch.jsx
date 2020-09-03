import React, { Component } from "react";
import { TwitterPicker } from "react-color";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    displayColorPicker: false,
    color: "#ea4440",
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  handleKeyPress = (e) => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      e.target.blur();
    }
  };

  toggleDisplayColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleColorChange = (color) => {
    this.setState({
      color: color.hex,
    });
  };

  handleColorPickerClose = () => {
    this.setState({ displayColorPicker: false });
  };

  addTime = (milliSecondsToAdd) => {
    if (this.state.timerOn) {
      this.stopTimer();
      this.setState({ timerTime: this.state.timerTime + milliSecondsToAdd });
    } else {
      this.setState({ timerTime: this.state.timerTime + milliSecondsToAdd });
    }
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    let style = { borderColor: this.state.color };
    let colorPickerContainer = this.state.displayColorPicker ? (
      <div style={{ marginLeft: "auto" }}>
        <div className="color-selection-button-container">
          <button
            style={{ backgroundColor: this.state.color }}
            onClick={this.toggleDisplayColorPicker}
          ></button>
        </div>
        <div style={{ position: "relative" }}>
          <div className="picker-container">
            <TwitterPicker
              color={this.state.color}
              colors={[
                "#EA4440",
                "#33055d",
                "#40b8bb",
                "#0F9563",
                "#f77474",
                "#3041AF",
              ]}
              onChange={this.handleColorChange}
              triangle="top-right"
            />
          </div>
          <div className="cover" onClick={this.handleColorPickerClose}></div>
        </div>
      </div>
    ) : (
      <div className="color-selection-button-container">
        <button
          style={{ backgroundColor: this.state.color }}
          onClick={this.toggleDisplayColorPicker}
        ></button>
      </div>
    );
    return (
      <div className="Stopwatch" style={style}>
        <div className="row border-accent" style={{ backgroundColor: this.state.color }}>
          <textarea
            rows="1"
            onKeyDown={this.handleKeyPress}
            defaultValue="Stopwatch"
          ></textarea>
        </div>
        <button
            className="close-button"
            onClick={() => this.props.deleteWatch(this.props.id)}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-x"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </button>
        <div className="container">
        <div className="row">
          <div className="Stopwatch-display">
            {hours}:{minutes}:{seconds}:{centiseconds}
          </div>
        </div>

        <div className="button-list">
          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button onClick={this.startTimer}>Start</button>
          )}
          {this.state.timerOn === true && (
            <button onClick={this.stopTimer}>Stop</button>
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button onClick={this.startTimer}>Resume</button>
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button onClick={this.resetTimer}>Reset</button>
          )}
        </div>
        <div>
          <div className="row button-list">
            <button onClick={() => this.addTime(60000)}>+1:00</button>
            <button onClick={() => this.addTime(60000 * 15)}>+15:00</button>
            <button onClick={() => this.addTime(60000 * 60)}>+60:00</button>
          </div>
          <div className="row button-list">
            <button onClick={() => this.addTime(-60000)}>-1:00</button>
            <button onClick={() => this.addTime(-60000 * 15)}>-15:00</button>
            <button onClick={() => this.addTime(-60000 * 60)}>-60:00</button>
          </div>

          <div className="button-list"></div>
          {colorPickerContainer}
        </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
