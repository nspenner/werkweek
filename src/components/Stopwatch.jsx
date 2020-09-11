import React, { Component } from "react";
import PropTypes from "prop-types";
import { TwitterPicker } from "react-color";
import { set, get } from "idb-keyval";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    displayColorPicker: false,
    color: "#ea4440",
    title: "Stopwatch",
    lastIntervalTime: 0,
  };

  startTimer = () => {
    this.setState(
      {
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime,
      },
      () => {
        set(this.props.id, this.state);
      }
    );
    this.timer = setInterval(() => {
      this.setState(
        {
          timerTime: Date.now() - this.state.timerStart,
          lastIntervalTime: Date.now(),
        },
        () => {
          set(this.props.id, this.state);
        }
      );
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false }, () => {
      set(this.props.id, this.state);
    });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState(
      {
        timerStart: 0,
        timerTime: 0,
        lastIntervalTime: 0,
      },
      () => {
        set(this.props.id, this.state);
      }
    );
  };

  handleKeyPress = (e) => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      e.target.blur();
    }
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  toggleDisplayColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleColorChange = (color) => {
    this.setState(
      {
        color: color.hex,
      },
      () => {
        set(this.props.id, this.state);
      }
    );
  };

  handleColorPickerClose = () => {
    this.setState({ displayColorPicker: false }, () => {
      set(this.props.id, this.state);
    });
  };

  addTime = (milliSecondsToAdd) => {
    if (this.state.timerOn) {
      this.stopTimer();
    }
    this.setState(
      { timerTime: this.state.timerTime + milliSecondsToAdd },
      () => {
        set(this.props.id, this.state);
      }
    );
  };

  componentDidMount = async () => {
    let stopwatchState = await get(this.props.id);
    if (!stopwatchState) {
      stopwatchState = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        displayColorPicker: false,
        color: "#ea4440",
        title: "Stopwatch",
      };
      set(this.props.id, stopwatchState);
    } else {
      if (stopwatchState.timerOn) {
        // If timer was on when this watch left, use the last logged interval to add time to watch
        stopwatchState.timerTime =
          stopwatchState.timerTime +
          (Date.now() - stopwatchState.lastIntervalTime);
        this.startTimer();
      }
    }
    stopwatchState.displayColorPicker = false;
    this.setState(stopwatchState);
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
        <div
          className="row border-accent"
          style={{ backgroundColor: this.state.color }}
        >
          <textarea
            rows="1"
            onKeyDown={this.handleKeyPress}
            onChange={this.handleChange}
            onBlur={() => set(this.props.id, this.state)}
            value={this.state.title}
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
            className="bi bi-x"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
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
              <button onClick={this.startTimer}>
                <ion-icon name="play"></ion-icon>
                <span>Start</span>
              </button>
            )}
            {this.state.timerOn === true && (
              <button onClick={this.stopTimer}>
                <ion-icon name="pause"></ion-icon>
                <span>Pause</span>
              </button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
              <button onClick={this.startTimer}>
                <ion-icon name="play"></ion-icon>
                <span>Resume</span>
              </button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
              <button onClick={this.resetTimer}>
                <ion-icon
                  style={{ "--ionicon-stroke-width": "48px" }}
                  name="refresh"
                ></ion-icon>{" "}
                <span>Reset</span>
              </button>
            )}
          </div>
          <div>
            <div className="row button-list">
              <button onClick={() => this.addTime(60000)}>+1:00</button>
              <button onClick={() => this.addTime(60000 * 15)}>+15:00</button>
              <button onClick={() => this.addTime(60000 * 60)}>+60:00</button>
            </div>
            <div className="row button-list">
              <button
                disabled={this.state.timerTime < 60000}
                onClick={() => this.addTime(-60000)}
              >
                -1:00
              </button>
              <button
                disabled={this.state.timerTime < 60000 * 15}
                onClick={() => this.addTime(-60000 * 15)}
              >
                -15:00
              </button>
              <button
                disabled={this.state.timerTime < 60000 * 60}
                onClick={() => this.addTime(-60000 * 60)}
              >
                -60:00
              </button>
              {colorPickerContainer}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Stopwatch.propTypes = {
  id: PropTypes.string.isRequired,
  deleteWatch: PropTypes.func.isRequired,
};

export default Stopwatch;
