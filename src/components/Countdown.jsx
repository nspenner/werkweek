import React from "react";
import WidgetTitle from "./WidgetTitle";
import ColorPicker from "./ColorPicker";
import Proptypes from "prop-types";
import ReactCountdown from "react-countdown";
import dayjs from "dayjs";
import { set, get } from "idb-keyval";

const defaultState = {
  date: Date.now() + 100,
  displayCountdown: false,
  hour: "",
  minute: "",
  second: "",
  title: "Countdown",
  isPaused: false,
  color: "#ea4440",
};

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds }) => {
  // Render a countdown
  return (
    <div className="row countdown-display">
      <input
        value={hours}
        name="hour"
        maxLength="2"
        placeholder="HH"
        aria-label="Hour"
        className="countdown-input"
        readOnly
      />
      :
      <input
        value={minutes}
        name="minute"
        maxLength="2"
        placeholder="MM"
        aria-label="Minute"
        className="countdown-input"
        readOnly
      />
      :
      <input
        value={seconds}
        name="second"
        maxLength="2"
        placeholder="SS"
        aria-label="Second"
        className="countdown-input"
        readOnly
      />
    </div>
  );
};

class Countdown extends React.Component {
  state = defaultState;
  countdownApi = null;

  componentDidMount = async () => {
    let countdownState = await get(this.props.id);
    if (!countdownState) {
      countdownState = defaultState;
      set(this.props.id, countdownState);
    }
    this.setState(countdownState);
  };

  handleCountdownInputChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value.replace(/\D/, ""),
      },
      () => {
        set(this.props.id, this.state);
      }
    );
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      set(this.props.id, this.state);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value !== 0) {
      const date = dayjs()
        .add(this.state.hour, "h")
        .add(this.state.minute, "m")
        .add(this.state.second, "s")
        .toDate();
      this.setState(
        {
          date,
          displayCountdown: true,
        },
        () => {
          set(this.props.id, this.state);
        }
      );
    }
  };

  handleStartClick = () => {
    this.countdownApi && this.countdownApi.start();
  };

  handlePauseClick = () => {
    this.countdownApi && this.countdownApi.pause();
    this.setState({});
  };

  handleResetClick = () => {
    this.setState(
      {
        date: Date.now(),
        displayCountdown: false,
        hour: "",
        minute: "",
        second: "",
      },
      () => {
        set(this.props.id, this.state);
      }
    );
  };

  handleUpdate = () => {
    this.forceUpdate();
  };

  handleComplete = () => {
    new Notification(`${this.state.title}`);
    this.forceUpdate();
  };

  handlePause = () => {
    this.forceUpdate();
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
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

  setRef = (countdown) => {
    if (countdown) {
      this.countdownApi = countdown.getApi();
    }
  };

  isPaused = () => {
    return !!(this.countdownApi && this.countdownApi.isPaused());
  };

  isCompleted = () => {
    return !!(this.countdownApi && this.countdownApi.isCompleted());
  };

  render() {
    return (
      <div className="countdown">
        <WidgetTitle
          titleValue={this.state.title}
          backgroundColor={this.state.color}
          onDelete={() => this.props.deleteWidget(this.props.id)}
          onChange={this.handleChange}
          inputName="title"
        />
        {!this.state.displayCountdown && (
          <div>
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row countdown-display">
                <input
                  value={this.state.hour}
                  name="hour"
                  onChange={this.handleCountdownInputChange}
                  maxLength="2"
                  placeholder="HH"
                  aria-label="Hour"
                  className="countdown-input"
                />
                :
                <input
                  value={this.state.minute}
                  name="minute"
                  onChange={this.handleCountdownInputChange}
                  maxLength="2"
                  placeholder="MM"
                  aria-label="Minute"
                  className="countdown-input"
                />
                :
                <input
                  value={this.state.second}
                  name="second"
                  onChange={this.handleCountdownInputChange}
                  maxLength="2"
                  placeholder="SS"
                  aria-label="Second"
                  className="countdown-input"
                />
              </div>
              <label
                htmlFor="submit"
                className="button margin-standard"
                tabIndex="0"
                onKeyDown={this.handleKeyDown}
              >
                <input
                  id="submit"
                  type="submit"
                  value="Start"
                  className="hidden"
                />
                <ion-icon name="play"></ion-icon>
                <span>Start</span>
              </label>
            </form>
            <div className="row button-list padding-x-small">
              <ColorPicker
                color={this.state.color}
                displayColorPicker={false}
                onChange={this.handleColorChange}
              />
            </div>
          </div>
        )}
        {this.state.displayCountdown && (
          <div>
            <ReactCountdown
              key={this.state.date}
              ref={this.setRef}
              date={this.state.date}
              onMount={this.handleUpdate}
              onStart={this.handleUpdate}
              onPause={this.handlePause}
              onComplete={this.handleComplete}
              renderer={renderer}
              autoStart
            />
            <div className="row button-list padding-x-small">
              <button
                type="button"
                onClick={this.handleStartClick}
                disabled={!this.isPaused() || this.isCompleted()}
              >
                <ion-icon name="play"></ion-icon>
                <span>Start</span>
              </button>
              <button
                type="button"
                onClick={this.handlePauseClick}
                disabled={this.isPaused() || this.isCompleted()}
              >
                <ion-icon name="pause"></ion-icon>
                <span>Pause</span>
              </button>{" "}
              <button type="button" onClick={this.handleResetClick}>
                <ion-icon
                  style={{ "--ionicon-stroke-width": "48px" }}
                  name="refresh"
                ></ion-icon>
                <span>Reset</span>
              </button>
            </div>
            <div className="row button-list padding-x-small">
              <ColorPicker
                color={this.state.color}
                displayColorPicker={false}
                onChange={this.handleColorChange}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

Countdown.propTypes = {
  id: Proptypes.string.isRequired,
  deleteWidget: Proptypes.func.isRequired,
};

export default Countdown;
