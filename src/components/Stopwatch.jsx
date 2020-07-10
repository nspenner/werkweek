import React, { Component } from "react";
import { TwitterPicker } from "react-color";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    displayColorPicker: false,
    color: "#ea4440",
    textAreaStyle: { backgroundColor: "#ea4440" },
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
      textAreaStyle: { backgroundColor: color.hex },
    });
  };

  handleColorPickerClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleTextAreaFocus = () => {
    this.setState({ textAreaStyle: { backgroundColor: "white" } });
  };

  handleTextAreaBlur = () => {
    this.setState({ textAreaStyle: { backgroundColor: this.state.color } });
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    let style = { backgroundColor: this.state.color };
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
        <div className="row">
          <div className="Stopwatch-display">
            {hours} : {minutes} : {seconds} : {centiseconds}
          </div>
          <button onClick={() => this.props.deleteWatch(this.props.id)}>
            Delete
          </button>
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
          <textarea
            rows="1"
            onKeyDown={this.handleKeyPress}
            style={this.state.textAreaStyle}
            onFocus={this.handleTextAreaFocus}
            onBlur={this.handleTextAreaBlur}
            defaultValue="Stopwatch"
          ></textarea>
        </div>
        <div className="row">{colorPickerContainer}</div>
      </div>
    );
  }
}

export default Stopwatch;
