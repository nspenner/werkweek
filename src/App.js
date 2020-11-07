import React from "react";
import WidgetList from "./components/WidgetList";
import { set, get, del } from "idb-keyval";
import { v4 as uuidv4 } from "uuid";

import "normalize.css";
import "./App.css";

class App extends React.Component {
  state = {
    widgets: [],
  };

  getValue = (key) => {
    get(key).then((val) => {
      console.log(val);
    });
  };

  addWidget = (type) => {
    const widgets = [
      ...this.state.widgets,
      { index: this.state.widgets.length + 1, id: uuidv4(), type },
    ];
    set("widgets", widgets);
    this.setState({
      widgets,
    });
  };

  deleteWidget = (id) => {
    let widgets = this.state.widgets;
    let filteredwidgets = widgets.filter((widget) => widget.id !== id);
    set("widgets", filteredwidgets);
    del(id);
    this.setState({ widgets: filteredwidgets });
  };

  componentDidMount = async () => {
    let widgets = await get("widgets");
    if (!widgets) {
      widgets = [{ index: 0, id: uuidv4(), type: "stopwatch" }];
    }
    this.setState({
      widgets,
    });

    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.testCounter}
        <header className="flex-container--centered">
          <h1>WerkWeek</h1>
        </header>
        <div>
          <WidgetList
            widgets={this.state.widgets}
            addWidget={this.addWidget}
            deleteWidget={this.deleteWidget}
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
