import React from "react";
import PropTypes from "prop-types";
import AddButton from "./AddButton";
import Stopwatch from "./Stopwatch";

class WidgetList extends React.Component {
  render() {
    const widgets = this.props.widgets.map((widget) => {
      return (
        <li key={widget.id}>
          {widget.type==='stopwatch' && <Stopwatch deleteWatch={this.props.deleteWidget} id={widget.id} />}
        </li>
      );
    });
    return (
      <ul>
        {widgets}
        <li key="addButton">
          <div className="placeholder-container">
            <AddButton addWidget={this.props.addWidget} />
          </div>
        </li>
      </ul>
    );
  }
}

WidgetList.propTypes = {
  widgets: PropTypes.array.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  addWidget: PropTypes.func.isRequired,
};

export default WidgetList;
