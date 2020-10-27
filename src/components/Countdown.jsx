import React from "react";
import Proptypes from "prop-types";
import ReactCountdown from "react-countdown";
import dayjs from "dayjs";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
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
  countdownApi = null;

  state = {
    date: Date.now() + 100,
    displayCountdown: false,
    hour: "",
    minute: "",
    second: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.replace(/\D/, ""),
    });
  };

  handleSubmit = () => {
    if (this.state.value !== 0) {
      const date = dayjs()
        .add(this.state.hour, "h")
        .add(this.state.minute, "m")
        .add(this.state.second, "s")
        .toDate();
      this.setState({
        date,
        displayCountdown: true,
      });
    }
  };

  handleStartClick = () => {
    this.countdownApi && this.countdownApi.start();
  };

  handlePauseClick = () => {
    this.countdownApi && this.countdownApi.pause();
  };

  handleResetClick = () => {
    this.setState({
      date: Date.now(),
      displayCountdown: false,
      hour: "",
      minute: "",
      second: "",
    });
  };

  handleUpdate = () => {
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
        <div
          className="row border-accent"
          style={{ backgroundColor: this.state.color }}
        >
          <textarea rows="1" defaultValue="Countdown"></textarea>
        </div>
        <button
          className="close-button"
          onClick={() => this.props.deleteWidget(this.props.id)}
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
        {!this.state.displayCountdown && (
          <form action="" onSubmit={this.handleSubmit}>
            <div className="row countdown-display">
              <input
                value={this.state.hour}
                name="hour"
                onChange={this.handleChange}
                maxLength="2"
                placeholder="HH"
                aria-label="Hour"
                className="countdown-input"
              />
              :
              <input
                value={this.state.minute}
                name="minute"
                onChange={this.handleChange}
                maxLength="2"
                placeholder="MM"
                aria-label="Minute"
                className="countdown-input"
              />
              :
              <input
                value={this.state.second}
                name="second"
                onChange={this.handleChange}
                maxLength="2"
                placeholder="SS"
                aria-label="Second"
                className="countdown-input"
              />
            </div>
            <label
              htmlFor="submit"
              className="standard-button margin-standard"
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
              onComplete={this.handleUpdate}
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
