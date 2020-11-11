import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import WidgetTitle from "./WidgetTitle";
import { set } from "idb-keyval";

const options = [
  { value: "am", label: "AM" },
  { value: "pm", label: "PM" },
];

class Alarm extends React.Component {
  state = {
    title: "Alarm",
    color: "#ea4440",
    selectedPeriod: "am",
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value }, () => {
      set(this.props.id, this.state);
    });
  };

  handleSelectChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="flex-container--column widget-container border-curve">
        <WidgetTitle
          titleValue={this.state.title}
          backgroundColor={this.state.color}
          onDelete={() => this.props.deleteWatch(this.props.id)}
          onChange={this.handleChange}
        />
        <div className="p--sml">
          <form action="" className="flow--med">
            <div className="flex-container--centered countdown-display">
              <input
                value={this.state.hour}
                name="hour"
                onChange={this.handleCountdownInputChange}
                maxLength="2"
                placeholder="HH"
                aria-label="Hour"
                className="countdown__input  p--sml"
              />
              <span className="m--sml">:</span>
              <input
                value={this.state.minute}
                name="minute"
                onChange={this.handleCountdownInputChange}
                maxLength="2"
                placeholder="MM"
                aria-label="Minute"
                className="countdown__input  p--sml"
              />
              <Select
                name="selectedOption"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
            </div>
          </form>
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
