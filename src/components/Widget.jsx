import React from "react";
import Proptypes from "prop-types";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import Alarm from "./Alarm";

class Widget extends React.Component {
  render() {
    let widget;
    if (this.props.widget.type === "stopwatch") {
      widget = (
        <Stopwatch
          deleteWatch={this.props.deleteWidget}
          id={this.props.widget.id}
        />
      );
    } else if (this.props.widget.type === "countdown") {
      widget = (
        <Countdown
          id={this.props.widget.id}
          deleteWidget={this.props.deleteWidget}
        />
      );
    } else if (this.props.widget.type === "alarm") {
      widget = (
        <Alarm
          id={this.props.widget.id}
          deleteWidget={this.props.deleteWidget}
        />
      );
    } else {
      widget = <div>?</div>;
    }
    return widget;
  }
}

Widget.propTypes = {
  widget: Proptypes.object.isRequired,
  deleteWidget: Proptypes.func.isRequired,
};

export default Widget;
