import React from "react";
import { defaultColorPalette } from "../resources/palettes";
import WidgetTitle from "./WidgetTitle";
import ColorPicker from "./ColorPicker";

import PropTypes from "prop-types";
import Select from "react-select";
import { set } from "idb-keyval";

const options = [
  { value: "am", label: "AM" },
  { value: "pm", label: "PM" },
];

class Alarm extends React.Component {
  state = {
    title: "Alarm",
    color: defaultColorPalette.blue.dark,
    selectedOption: { value: "am", label: "AM" },
    hour: "",
    minute: "",
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
    console.log(`Option selected:`, selectedOption);
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
          onDelete={() => this.props.deleteWatch(this.props.id)}
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
              />
              <div className="select-container">
                <Select
                  name="selectedOption"
                  value={selectedOption}
                  onChange={this.handleSelectChange}
                  options={options}
                  styles={customStyles}
                />
              </div>
            </div>
            <div className="button-list">
              <button type="submit">
                <ion-icon name="play"></ion-icon>
                <span>Start</span>
              </button>
            </div>
          </form>
          <div className="button-list">
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

Alarm.propTypes = {
  id: PropTypes.string.isRequired,
  deleteWatch: PropTypes.func.isRequired,
};

export default Alarm;
