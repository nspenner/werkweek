import React from "react";
import PropTypes from "prop-types";
import AddButton from "./AddButton";
import Widget from "./Widget";

class WidgetList extends React.Component {
  render() {
    const widgets = this.props.widgets.map((widget) => {
      return (
        <li key={widget.id}>
          <Widget widget={widget} deleteWidget={this.props.deleteWidget} />
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
