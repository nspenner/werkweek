import React from "react";

class CustomNameArea extends React.Component {
  state = {
    style: { backgroundColor: this.props.color },
  };

  handleKeyPress = (e) => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      e.target.blur();
    }
  };

  handleTextAreaFocus = () => {
    this.setState({ style: { backgroundColor: "white" } });
  };

  handleTextAreaBlur = () => {
    this.setState({ style: { backgroundColor: this.props.color } });
  };

  render() {
    return (
      <div>
        <textarea
          rows="1"
          onKeyDown={this.handleKeyPress}
          style={this.state.style}
          onFocus={this.handleTextAreaFocus}
          onBlur={this.handleTextAreaBlur}
        >
          Stopwatch
        </textarea>
      </div>
    );
  }
}

export default CustomNameArea;
