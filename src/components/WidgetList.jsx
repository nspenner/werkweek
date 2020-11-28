import React from "react";
import PropTypes from "prop-types";
import AddButton from "./AddButton";
import GridLayout from "react-grid-layout";
import { get, set } from "idb-keyval";

class WidgetList extends React.Component {
  state = {
    layout: [],
  };

  onLayoutChange = (layout) => {
    this.setState({ layout }, () => {
      set("layout", layout);
    });
  };

  render() {
    // layout.push({i: 'addButton', w:1, h: 1, x: xCounter%3, y: yCounter, static: true})
    return (
      <ul className="m--center widget-grid">
        <GridLayout
          className="layout"
          layout={this.props.layout}
          cols={3}
          rowHeight={250}
          width={1048}
          draggableHandle=".drag-handle"
          margin={[16, 16]}
          compactType="horizontal"
          isResizable={false}
          onLayoutChange={this.props.onLayoutChange}
        >
          {this.props.widgets}
        </GridLayout>
        <li key="addButton" className="p--med">
          <AddButton addWidget={this.props.addWidget} />
        </li>
      </ul>

      // <ul className="widget-grid p--non m--center">
      //   {widgets}
      //   <li key="addButton">
      //     <div className="placeholder-container">
      //       <AddButton addWidget={this.props.addWidget} />
      //     </div>
      //   </li>
      // </ul>
    );
  }
}

WidgetList.propTypes = {
  widgets: PropTypes.array.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  addWidget: PropTypes.func.isRequired,
  layout: PropTypes.array.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
};

export default WidgetList;
