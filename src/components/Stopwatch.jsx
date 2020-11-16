import React, { Component } from "react";
import WidgetTitle from "./WidgetTitle";
import ColorPicker from "./ColorPicker";
import { defaultColorPalette } from "../resources/palettes";

import PropTypes from "prop-types";
import { set, get } from "idb-keyval";


class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    color: defaultColorPalette.red.dark,
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
    this.setState({ title: e.target.value }, () => {
      set(this.props.id, this.state);
    });
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
        color: defaultColorPalette.red.dark,
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
    this.setState(stopwatchState);
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    let style = { borderColor: this.state.color };

    return (
      <div className="flex-container--column widget-container border-curve" style={style}>
        <WidgetTitle
          titleValue={this.state.title}
          backgroundColor={this.state.color}
          onDelete={() => this.props.deleteWatch(this.props.id)}
          onChange={this.handleChange}
        />
        <div className="p--sml flex-container--column flow--sml">
          <div className="flex-container--centered">
            <div className="Stopwatch-display">
              <span className="monospace text--lrg">
                {hours}:{minutes}:{seconds}:{centiseconds}
              </span>
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
                ></ion-icon>
                <span>Reset</span>
              </button>
            )}
          </div>
          <div className="button-list">
            <button onClick={() => this.addTime(60000)}>+1:00</button>
            <button onClick={() => this.addTime(60000 * 15)}>+15:00</button>
            <button onClick={() => this.addTime(60000 * 60)}>+60:00</button>
          </div>
          <div className="button-list flex-container">
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
            <ColorPicker
              color={this.state.color}
              displayColorPicker={false}
              onChange={this.handleColorChange}
            />
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
