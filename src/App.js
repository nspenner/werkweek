import React from "react";
import WidgetList from "./components/WidgetList";
import Widget from "./components/Widget";
import { set, get, del } from "idb-keyval";
import { v4 as uuidv4 } from "uuid";

import "normalize.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./App.css";

class App extends React.Component {
  state = {
    widgets: [],
    layout: [],
  };

  calculateLayout = (widgets) => {
    let layout = [];
    let xCounter = 0;
    let yCounter = 0;
    widgets.forEach((widget) => {
      layout.push({ i: widget.id, w: 1, h: 1, x: xCounter % 3, y: yCounter });
      if (xCounter % 3 === 2) yCounter++;
      xCounter++;
    });
    return layout;
  };

  addWidget = (type) => {
    const id = uuidv4();
    const widgets = [
      ...this.state.widgets,
      { index: this.state.widgets.length + 1, id, type },
    ];
    const layout = this.calculateLayout(widgets);
    this.setState(
      {
        widgets,
        layout,
      },
      () => {
        set("widgets", this.state.widgets);
        set("layout", this.state.layout);
      }
    );
  };

  deleteWidget = (id) => {
    let widgets = this.state.widgets;
    let filteredwidgets = widgets.filter((widget) => widget.id !== id);
    const layout = this.calculateLayout(widgets);
    this.setState({ widgets: filteredwidgets, layout }, () => {
      set("widgets", filteredwidgets);
      set("layout", layout);
      del(id);
    });
  };

  componentDidMount = async () => {
    let widgets = await get("widgets");
    if (!widgets) {
      widgets = [{ index: 0, id: uuidv4(), type: "stopwatch" }];
    }
    let layout = await get("layout");
    if (!layout) {
      layout = [{ i: widgets[0].id, w: 1, h: 1, x: 0, y: 0 }];
    }
    this.setState(
      {
        widgets,
        layout,
      },
      () => {
        set("widgets", widgets);
        set("layout", layout);
      }
    );

    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  };

  onLayoutChange = (layout) => {
    this.setState(layout, () => {
      set("layout", layout);
    });
  };

  render() {
    const widgets = this.state.widgets.map((widget) => {
      return (
        <li key={widget.id}>
          <Widget widget={widget} deleteWidget={this.deleteWidget} />
        </li>
      );
    });
    return (
      <div className="App">
        {this.state.testCounter}
        <header className="flex-container--centered">
          <h1>WerkWeek</h1>
        </header>
        <div>
          <WidgetList
            widgets={widgets}
            layout={this.state.layout}
            addWidget={this.addWidget}
            deleteWidget={this.deleteWidget}
            onLayoutChange={this.onLayoutChange}
          />
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ widgets: event.target.value });
  };
}

export default App;
