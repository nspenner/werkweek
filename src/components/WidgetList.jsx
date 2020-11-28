import React from "react";
import PropTypes from "prop-types";
import AddButton from "./AddButton";
import Widget from "./Widget";
import GridLayout from "react-grid-layout";

class WidgetList extends React.Component {
  render() {
    let layout = [];
    let xCounter = 0;
    let yCounter = 0;
    // const layout = [
    //   { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
    // ];
    const widgets = this.props.widgets.map((widget) => {
      layout.push({ i: widget.id, w: 1, h: 1, x: xCounter % 3, y: yCounter });
      if (xCounter % 3 === 2) yCounter++;
      xCounter++;
      return (
        <div key={widget.id}>
          <Widget widget={widget} deleteWidget={this.props.deleteWidget} />
        </div>
      );
    });
    return (
      <div className="m--center widget-grid">
        <GridLayout
          className="layout"
          layout={layout}
          cols={3}
          rowHeight={250}
          width={1048}
          draggableHandle=".drag-handle"
          margin={[16, 16]}
          compactType="horizontal"
        >
          {widgets}
        </GridLayout>
      </div>

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
};

export default WidgetList;
