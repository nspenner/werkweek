import React from "react";
import PropTypes from "prop-types";
import { TwitterPicker } from "react-color";

class ColorPicker extends React.Component {
  state = {
    color: this.props.color,
    displayColorPicker: this.props.displayColorPicker,
  };

  handleColorPickerClose = () => {
    this.setState({ displayColorPicker: false });
  };

  toggleDisplayColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  render() {
    return this.state.displayColorPicker ? (
      <div className="full-width flex">
        <div className="color-selection-button-container">
          <button
            style={{ backgroundColor: this.props.color }}
            onClick={this.toggleDisplayColorPicker}
          ></button>
          <div className="picker-container">
            <TwitterPicker
              color={this.props.color}
              colors={[
                "#EA4440",
                "#33055d",
                "#40b8bb",
                "#0F9563",
                "#f77474",
                "#3041AF",
              ]}
              onChange={this.props.onChange}
              triangle="top-right"
            />
          </div>

          <div className="cover" onClick={this.handleColorPickerClose}></div>
        </div>
      </div>
    ) : (
      <div className="full-width flex">
        <div className="color-selection-button-container">
          <button
            style={{ backgroundColor: this.props.color }}
            onClick={this.toggleDisplayColorPicker}
          ></button>
        </div>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  displayColorPicker: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
