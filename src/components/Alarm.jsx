import React from "react";
import { defaultColorPalette } from "../resources/palettes";
import WidgetTitle from "./WidgetTitle";
import ColorPicker from "./ColorPicker";

import PropTypes from "prop-types";
import Select from "react-select";
import { get, set } from "idb-keyval";
import ReactCountdown from "react-countdown";
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";

const options = [
  { value: "am", label: "AM" },
  { value: "pm", label: "PM" },
];

const renderer = ({ hours, minutes, seconds }) => {
  // Render a countdown
  return (
    <div className="flex-container--centered">
      <span name="hour" aria-label="Hour" className="monospace italic">
        {hours}
      </span>
      <span className="m--sml">:</span>
      <span name="minute" aria-label="Minute" className="monospace italic">
        {minutes}
      </span>
      <span className="m--sml">:</span>
      <span name="second" aria-label="Second" className="monospace italic">
        {seconds}
      </span>
    </div>
  );
};

class Alarm extends React.Component {
  state = {
    title: "Alarm",
    color: defaultColorPalette.blue.dark,
    selectedOption: { value: "am", label: "AM" },
    hour: "",
    minute: "",
    date: Date.now(),
  };
  countdownApi = null;

  componentDidMount = async () => {
    let alarmState = await get(this.props.id);
    if (alarmState) {
      this.setState(alarmState);
    }
  };

  handleStopClick = () => {
    this.setState(
      {
        displayCountdown: false,
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

  handleHourChange = (e) => {
    const hour = e.target.value.replace(/\D/, "");
    const hourValue = parseInt(hour);
    if ((hourValue >= 0 && hourValue <= 12) || !hour) {
      this.setState({ hour }, () => set(this.props.id, this.state));
    }
  };

  handleMinuteChange = (e) => {
    const minute = e.target.value.replace(/\D/, "");
    const minuteValue = parseInt(minute);
    if ((minuteValue >= 0 && minuteValue <= 60) || !minute) {
      this.setState({ minute }, () => set(this.props.id, this.state));
    }
  };

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    dayjs.extend(objectSupport);
    const adjustedHour =
      this.state.selectedOption.value === "am"
        ? this.state.hour
        : `${parseInt(this.state.hour) + 12}`;
    let date = dayjs({
      hour: adjustedHour,
      minute: this.state.minute,
      a: this.state.selectedOption.value,
    });
    if (date.isBefore(dayjs())) {
      date = date.add(1, "day");
    }
    this.setState({ date: date.toDate(), displayCountdown: true });
  };

  render() {
    const { selectedOption } = this.state;
    const customStyles = {
      container: (provided) => ({
        ...provided,
        height: "100%",
        fontFamily: "Fira Sans",
        fontSize: "2rem",
      }),
      control: (provided) => ({
        ...provided,
        height: "100%",
      }),
      input: (provided) => ({
        ...provided,
        height: "inherit",
      }),
    };
    return (
      <div className="flex-container--column widget-container border-curve">
        <WidgetTitle
          titleValue={this.state.title}
          backgroundColor={this.state.color}
          onDelete={() => this.props.deleteWidget(this.props.id)}
          onChange={this.handleChange}
        />
        <div className="p--sml">
          <form onSubmit={this.handleSubmit} className="flow--med">
            <div className="flex-container--centered countdown-display">
              <input
                value={this.state.hour}
                name="hour"
                onChange={this.handleHourChange}
                maxLength="2"
                placeholder="HH"
                aria-label="Hour"
                className="countdown__input  p--sml"
                readOnly={this.state.displayCountdown}
              />
              <span className="m--sml">:</span>
              <input
                value={this.state.minute}
                name="minute"
                onChange={this.handleMinuteChange}
                maxLength="2"
                placeholder="MM"
                aria-label="Minute"
                className="countdown__input  p--sml"
                readOnly={this.state.displayCountdown}
              />
              <div className="select-container">
                <Select
                  name="selectedOption"
                  value={selectedOption}
                  onChange={this.handleSelectChange}
                  options={options}
                  styles={customStyles}
                  isDisabled={this.state.displayCountdown}
                />
              </div>
            </div>
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
                <div className="button-list flex-container">
                  <button onClick={this.handleStopClick}>
                    <ion-icon name="stop"></ion-icon>
                    <span>Stop</span>
                  </button>
                  <ColorPicker
                    color={this.state.color}
                    displayColorPicker={false}
                    onChange={this.handleColorChange}
                  />
                </div>
              </div>
            )}
            {!this.state.displayCountdown && (
              <div>
                <div className="flex-container--centered">
                  <span
                    name="hour"
                    aria-label="Hour"
                    className="monospace italic"
                  >
                    --{" "}
                  </span>
                  <span className="m--sml">:</span>
                  <span
                    name="minute"
                    aria-label="Minute"
                    className="monospace italic"
                  >
                    --{" "}
                  </span>
                  <span className="m--sml">:</span>
                  <span
                    name="second"
                    aria-label="Second"
                    className="monospace italic"
                  >
                    --{" "}
                  </span>
                </div>
                <div className="button-list flex-container">
                  <button type="submit">
                    <ion-icon name="play"></ion-icon>
                    <span>Start</span>
                  </button>
                  <ColorPicker
                    color={this.state.color}
                    displayColorPicker={false}
                    onChange={this.handleColorChange}
                  />
                </div>
              </div>
            )}
          </form>
          <div className="button-list"></div>
        </div>
      </div>
    );
  }
}

Alarm.propTypes = {
  id: PropTypes.string.isRequired,
  deleteWidget: PropTypes.func.isRequired,
};

export default Alarm;
